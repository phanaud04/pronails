import { Resend } from 'resend';

export async function POST(request) {
  const body = await request.json();
  const { first_name, last_name, email, phone, service, booking_date, booking_time, notes, technician } = body;

  if (!first_name || !last_name || !email || !service || !booking_date || !booking_time) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // GoCheckIn integration — stubs out gracefully until client provides credentials
  let bookingId;
  if (process.env.GOCHECKIN_API_KEY) {
    const res = await fetch('https://api.gocheckin.com/v1/appointments', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GOCHECKIN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location_id: process.env.GOCHECKIN_LOCATION_ID,
        // TODO: map service name to GOCHECKIN_SERVICE_ID when client provides IDs
        customer_name: `${first_name} ${last_name}`,
        customer_email: email,
        customer_phone: phone || '',
        date: booking_date,
        time: booking_time,
        notes: notes || '',
        technician_preference: technician || '',
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('GoCheckIn error:', err);
      return Response.json({ error: 'Failed to create booking' }, { status: 502 });
    }

    const data = await res.json();
    bookingId = data.id;
  } else {
    // Mock mode — logs payload, returns fake ID
    console.log('[GoCheckIn MOCK] Booking received:', body);
    bookingId = `MOCK-${Date.now()}`;
  }

  // Send confirmation email via Resend
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `Pro Nails <${process.env.FROM_EMAIL ?? 'onboarding@resend.dev'}>`,
      to: email,
      subject: 'Your appointment request at Pro Nails',
      html: `
        <p>Hi ${first_name},</p>
        <p>We received your appointment request for <strong>${service}</strong> on <strong>${booking_date}</strong> at <strong>${booking_time}</strong>.</p>
        <p>We'll confirm within a few hours. Need to reach us sooner? Call <strong>(206) 555-0182</strong>.</p>
        <p>See you soon,<br />Pro Nails — Queen Anne, Seattle</p>
      `,
    });
  } else {
    console.log('[Resend MOCK] Confirmation email would go to:', email);
  }

  return Response.json({ success: true, id: bookingId });
}
