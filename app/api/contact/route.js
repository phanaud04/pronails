import { Resend } from 'resend';

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `Pro Nails Website <${process.env.FROM_EMAIL ?? 'onboarding@resend.dev'}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.FROM_EMAIL,
      replyTo: email,
      subject: subject ? `[Pro Nails] ${subject}` : `[Pro Nails] Message from ${name}`,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });
  } else {
    console.log('[Resend MOCK] Contact message would be sent:', body);
  }

  return Response.json({ success: true });
}
