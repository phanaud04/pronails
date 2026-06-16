export default function Home() {
  return (
    <>

      {/* ============================================================
          NAVIGATION
      ============================================================ */}
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          <img src="/brand_assets/Logo-white.png" alt="Pro Nails" />
        </a>
        <button className="nav-hamburger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ============================================================
          HOME — HERO + STRIP
      ============================================================ */}
      <section id="home">

        <div className="hero">
          <div className="hero-content">
            <h1>Generations of <em>nail care</em>,<br />right in <em>Seattle</em>.</h1>
            <div className="hero-ctas">
              <a href="#booking" className="cta-link">Book an Appointment</a>
              <span className="cta-sep">|</span>
              <a href="#services" className="cta-link">View Our Services</a>
            </div>
          </div>
        </div>

        <div className="strip-section">
          <div className="photo-strip">
            <img src="/images/nail1.png" alt="Black French tip nails" />
            <img src="/images/nail2.png" alt="Shimmer nail art" />
            <img src="/images/nail3.png" alt="Deep red nails" />
            <img src="/images/nail4.png" alt="Purple nail art" />
            <img src="/images/nail5.png" alt="Coral gel nails" />
            <img src="/images/nail1.png" alt="Black French tip nails" />
            <img src="/images/nail2.png" alt="Shimmer nail art" />
            <img src="/images/nail3.png" alt="Deep red nails" />
            <img src="/images/nail4.png" alt="Purple nail art" />
            <img src="/images/nail5.png" alt="Coral gel nails" />
          </div>
        </div>

      </section>

      {/* ============================================================
          IMPACT STATEMENT
      ============================================================ */}
      <section className="impact-section">
        <div className="impact-inner reveal">
          <p className="impact-origin">Est. 2003 ★ Queen Anne, Seattle</p>
          <h2 className="impact-headline">More than nails.<br /><em>A family&#39;s legacy.</em></h2>
          <p className="impact-body">Pro Nails was founded in 2003 by a Vietnamese immigrant family who brought decades of craft and quiet dedication to Queen Anne. Two generations later, that same spirit runs through every appointment: unhurried, personal, and done right. We are proud to be part of this neighborhood&#39;s fabric, and grateful for every client who has made us their home salon.</p>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="stat-num" data-count="20" data-suffix="+">20+</span>
              <span className="stat-label">Years Serving Queen Anne</span>
            </div>
            <div className="impact-divider">★</div>
            <div className="impact-stat">
              <span className="stat-num">2nd</span>
              <span className="stat-label">Generation Family-Run</span>
            </div>
            <div className="impact-divider">★</div>
            <div className="impact-stat">
              <span className="stat-num" data-count="7">7</span>
              <span className="stat-label">Days a Week, Open for You</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
      ============================================================ */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <h2 className="testimonials-heading reveal">What Our Clients Say</h2>
          <div className="testimonials-grid">

            <div className="testimonial-card reveal">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">&ldquo;I&#39;ve been coming here for over eight years and I would not trust anyone else with my nails. The attention to detail is unreal; they remember exactly how I like my gel and always make me feel so welcome. This place is a gem.&rdquo;</p>
              <div className="testimonial-author">
                <span className="author-name">Margaret L.</span>
                <span className="author-meta">Queen Anne resident · Google Review</span>
              </div>
            </div>

            <div className="testimonial-card reveal">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">&ldquo;The most calming, unhurried nail experience I&#39;ve ever had. You can tell this family genuinely cares about their craft, about you, about the community. My go-to before every big occasion and honestly just whenever I need a reset.&rdquo;</p>
              <div className="testimonial-author">
                <span className="author-name">Sofia R.</span>
                <span className="author-meta">Regular client since 2018 · Google Review</span>
              </div>
            </div>

            <div className="testimonial-card reveal">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">&ldquo;Stumbled in two years ago and never looked back. The nail art here is stunning: intricate work, beautiful finishes, and everything lasts so much longer than anywhere else I&#39;ve tried in Seattle. Highly, highly recommend.&rdquo;</p>
              <div className="testimonial-author">
                <span className="author-name">Priya K.</span>
                <span className="author-meta">Queen Anne local · Google Review</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES
      ============================================================ */}
      <section id="services">

        <div className="section-intro">
          <span className="eyebrow reveal">The Full Menu</span>
          <h2 className="reveal reveal-delay-1">Services &amp; <em>Pricing</em></h2>
          <p className="reveal reveal-delay-2">Honest prices, experienced hands, and no pressure. Walk-ins welcome, appointments recommended.</p>
        </div>

        <div className="services-photo-banner reveal">
          <img src="https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?auto=format&fit=crop&w=1600&q=80" alt="Freshly polished nails" />
        </div>

        <div className="services-body">

          <div className="service-category">
            <h2 className="category-label reveal">Manicures</h2>
            <div className="service-list">
              <div className="service-item reveal"><div className="service-item-info"><h3>Classic Manicure</h3><p>Shaping, cuticle care, hand massage, and regular polish.</p></div><div className="service-item-meta"><span className="svc-price">$22</span><span className="svc-dur">30 min</span></div></div>
              <div className="service-item reveal reveal-delay-1"><div className="service-item-info"><h3>Gel Manicure</h3><p>Long-lasting gel color cured under UV. Chip-free for 2–3 weeks.</p></div><div className="service-item-meta"><span className="svc-price">$38</span><span className="svc-dur">45 min</span></div></div>
              <div className="service-item reveal reveal-delay-2"><div className="service-item-info"><h3>Dip Powder Manicure</h3><p>Durable, lightweight dip powder in hundreds of shades.</p></div><div className="service-item-meta"><span className="svc-price">$45</span><span className="svc-dur">50 min</span></div></div>
              <div className="service-item reveal"><div className="service-item-info"><h3>French Manicure</h3><p>The classic white tip with a natural base.</p></div><div className="service-item-meta"><span className="svc-price">$28</span><span className="svc-dur">35 min</span></div></div>
              <div className="service-item reveal reveal-delay-1"><div className="service-item-info"><h3>French Gel Manicure</h3><p>French tip done in gel for extra longevity.</p></div><div className="service-item-meta"><span className="svc-price">$46</span><span className="svc-dur">50 min</span></div></div>
              <div className="service-item reveal reveal-delay-2"><div className="service-item-info"><h3>Polish Change (Hands)</h3><p>Quick color swap, no shaping or prep.</p></div><div className="service-item-meta"><span className="svc-price">$15</span><span className="svc-dur">15 min</span></div></div>
            </div>
          </div>

          <div className="service-category">
            <h2 className="category-label reveal">Pedicures</h2>
            <div className="service-list">
              <div className="service-item reveal"><div className="service-item-info"><h3>Classic Pedicure</h3><p>Soak, trim, shape, callus care, leg massage, and regular polish.</p></div><div className="service-item-meta"><span className="svc-price">$38</span><span className="svc-dur">45 min</span></div></div>
              <div className="service-item reveal reveal-delay-1"><div className="service-item-info"><h3>Gel Pedicure</h3><p>All the care of a classic pedicure, finished with long-lasting gel color.</p></div><div className="service-item-meta"><span className="svc-price">$52</span><span className="svc-dur">55 min</span></div></div>
              <div className="service-item reveal reveal-delay-2"><div className="service-item-info"><h3>Deluxe Pedicure</h3><p>Extended treatment with sugar scrub, paraffin wrap, and a deep leg massage.</p></div><div className="service-item-meta"><span className="svc-price">$58</span><span className="svc-dur">65 min</span></div></div>
              <div className="service-item reveal"><div className="service-item-info"><h3>Polish Change (Feet)</h3><p>Fresh color on your toes, no soak needed.</p></div><div className="service-item-meta"><span className="svc-price">$20</span><span className="svc-dur">20 min</span></div></div>
            </div>
          </div>

          <div className="service-category">
            <h2 className="category-label reveal">Nail Enhancements</h2>
            <div className="service-list">
              <div className="service-item reveal"><div className="service-item-info"><h3>Acrylic Full Set</h3><p>Sculpted acrylic nails, shaped and finished to your preference.</p></div><div className="service-item-meta"><span className="svc-price">$58</span><span className="svc-dur">75 min</span></div></div>
              <div className="service-item reveal reveal-delay-1"><div className="service-item-info"><h3>Acrylic Fill</h3><p>Maintenance fill for existing acrylic sets.</p></div><div className="service-item-meta"><span className="svc-price">$40</span><span className="svc-dur">60 min</span></div></div>
              <div className="service-item reveal reveal-delay-2"><div className="service-item-info"><h3>Builder Gel Full Set</h3><p>Flexible, odor-free builder gel applied over natural nails or tips.</p></div><div className="service-item-meta"><span className="svc-price">$68</span><span className="svc-dur">80 min</span></div></div>
              <div className="service-item reveal"><div className="service-item-info"><h3>Builder Gel Fill</h3><p>Maintenance fill for existing builder gel sets.</p></div><div className="service-item-meta"><span className="svc-price">$48</span><span className="svc-dur">65 min</span></div></div>
              <div className="service-item reveal reveal-delay-1"><div className="service-item-info"><h3>Nail Extensions (Tips)</h3><p>Tip extensions added before acrylic or gel application.</p></div><div className="service-item-meta"><span className="svc-price">$12+</span><span className="svc-dur">Varies</span></div></div>
              <div className="service-item reveal reveal-delay-2"><div className="service-item-info"><h3>Soak-Off Removal</h3><p>Safe removal of gel, dip, or acrylic. Included with new service.</p></div><div className="service-item-meta"><span className="svc-price">$15</span><span className="svc-dur">20 min</span></div></div>
            </div>
          </div>

          <div className="service-category">
            <h2 className="category-label reveal">Nail Art &amp; Add-Ons</h2>
            <div className="service-list">
              <div className="service-item reveal"><div className="service-item-info"><h3>Nail Art (Per Nail)</h3><p>Hand-painted designs, florals, geometric accents, and more.</p></div><div className="service-item-meta"><span className="svc-price">$3–5</span><span className="svc-dur">Per nail</span></div></div>
              <div className="service-item reveal reveal-delay-1"><div className="service-item-info"><h3>Custom Nail Art (Full Set)</h3><p>Full set of custom-designed nails. Discuss your idea at booking.</p></div><div className="service-item-meta"><span className="svc-price">$20+</span><span className="svc-dur">Varies</span></div></div>
              <div className="service-item reveal reveal-delay-2"><div className="service-item-info"><h3>Chrome Powder</h3><p>Mirror chrome finish added over gel color.</p></div><div className="service-item-meta"><span className="svc-price">$12</span><span className="svc-dur">Add-on</span></div></div>
              <div className="service-item reveal"><div className="service-item-info"><h3>Nail Gems / Rhinestones</h3><p>Crystals and gems applied to finished nails.</p></div><div className="service-item-meta"><span className="svc-price">$5+</span><span className="svc-dur">Add-on</span></div></div>
              <div className="service-item reveal reveal-delay-1"><div className="service-item-info"><h3>Nail Repair</h3><p>Repair a broken or lifting nail while you&#39;re in.</p></div><div className="service-item-meta"><span className="svc-price">$5</span><span className="svc-dur">Per nail</span></div></div>
              <div className="service-item reveal reveal-delay-2"><div className="service-item-info"><h3>Paraffin Wax Treatment</h3><p>Deep moisturizing wax treatment for hands or feet.</p></div><div className="service-item-meta"><span className="svc-price">$12</span><span className="svc-dur">Add-on</span></div></div>
            </div>
          </div>

        </div>

        <div className="services-book-cta">
          <a href="#booking" className="btn-red reveal">Book an Appointment</a>
        </div>

      </section>

      {/* ============================================================
          BOOKING
      ============================================================ */}
      <section id="booking">

        <div className="section-intro">
          <span className="eyebrow reveal">Reserve Your Spot</span>
          <h2 className="reveal reveal-delay-1">Book an <em>Appointment</em></h2>
          <p className="reveal reveal-delay-2">Fill out the form and we&#39;ll confirm your appointment. Walk-ins always welcome.</p>
        </div>

        <form className="booking-layout" id="booking-form">

          <div className="booking-form-col reveal">
            <h2>Your Details</h2>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first_name" placeholder="Jane" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last_name" placeholder="Smith" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="jane@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="(206) 555-0000" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Service</label>
              <div className="select-wrap">
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  <optgroup label="Manicures">
                    <option>Classic Manicure · $22</option>
                    <option>Gel Manicure · $38</option>
                    <option>Dip Powder Manicure · $45</option>
                    <option>French Manicure · $28</option>
                    <option>French Gel Manicure · $46</option>
                    <option>Polish Change (Hands) · $15</option>
                  </optgroup>
                  <optgroup label="Pedicures">
                    <option>Classic Pedicure · $38</option>
                    <option>Gel Pedicure · $52</option>
                    <option>Deluxe Pedicure · $58</option>
                    <option>Polish Change (Feet) · $20</option>
                  </optgroup>
                  <optgroup label="Nail Enhancements">
                    <option>Acrylic Full Set · $58</option>
                    <option>Acrylic Fill · $40</option>
                    <option>Builder Gel Full Set · $68</option>
                    <option>Builder Gel Fill · $48</option>
                    <option>Soak-Off Removal · $15</option>
                  </optgroup>
                  <optgroup label="Nail Art &amp; Add-Ons">
                    <option>Custom Nail Art (Full Set) · $20+</option>
                    <option>Chrome Powder · $12</option>
                    <option>Paraffin Wax Treatment · $12</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="technician">Technician Preference</label>
              <div className="select-wrap">
                <select id="technician" name="technician" defaultValue="">
                  <option value="">No preference</option>
                  <option>Any available</option>
                  <option>Regular technician (note name below)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Notes or Special Requests</label>
              <textarea id="notes" name="notes" placeholder="Inspiration photos, nail length preference, allergies, accessibility needs…"></textarea>
            </div>

            <input type="hidden" id="booking-date" name="booking_date" />
            <input type="hidden" id="booking-time" name="booking_time" />

            <p className="form-note">We&#39;ll send a confirmation to your email within a few hours. For same-day appointments, please call us at (206) 555-0182.</p>

            <button type="submit" className="btn-red">Request Appointment</button>

            <div className="form-success">
              Thank you! Your appointment request has been received. We&#39;ll confirm via email shortly.
            </div>
          </div>

          <div className="booking-cal-col reveal reveal-delay-2">
            <h2>Choose a Date &amp; Time</h2>

            <div className="cal-widget">
              <div className="cal-head">
                <button type="button" className="cal-nav-btn" id="cal-prev" aria-label="Previous month">←</button>
                <h3 id="cal-title">Loading…</h3>
                <button type="button" className="cal-nav-btn" id="cal-next" aria-label="Next month">→</button>
              </div>
              <div className="cal-grid" id="cal-grid"></div>
              <p className="selected-date-display" id="cal-date-display">Select a date above</p>
            </div>

            <div className="time-section">
              <span className="time-section-head">Available Times</span>
              <div className="time-grid">
                <button type="button" className="time-btn">9:00 AM</button>
                <button type="button" className="time-btn">9:30 AM</button>
                <button type="button" className="time-btn unavail">10:00 AM</button>
                <button type="button" className="time-btn">10:30 AM</button>
                <button type="button" className="time-btn">11:00 AM</button>
                <button type="button" className="time-btn unavail">11:30 AM</button>
                <button type="button" className="time-btn">12:00 PM</button>
                <button type="button" className="time-btn">12:30 PM</button>
                <button type="button" className="time-btn">1:00 PM</button>
                <button type="button" className="time-btn unavail">1:30 PM</button>
                <button type="button" className="time-btn">2:00 PM</button>
                <button type="button" className="time-btn">2:30 PM</button>
                <button type="button" className="time-btn unavail">3:00 PM</button>
                <button type="button" className="time-btn">3:30 PM</button>
                <button type="button" className="time-btn">4:00 PM</button>
                <button type="button" className="time-btn">4:30 PM</button>
                <button type="button" className="time-btn">5:00 PM</button>
                <button type="button" className="time-btn unavail">5:30 PM</button>
                <button type="button" className="time-btn">6:00 PM</button>
                <button type="button" className="time-btn">6:30 PM</button>
              </div>
              <p className="form-note" style={{marginTop:'14px', fontSize:'12px'}}>
                Greyed-out times are currently unavailable. Availability updates when the backend is connected.
              </p>
            </div>
          </div>

        </form>

      </section>

      {/* ============================================================
          ABOUT
      ============================================================ */}
      <section id="about">

        <div className="about-banner reveal">
          <img src="/images/nail_banner.jpg" alt="Nail technician applying polish at Pro Nails" />
        </div>

        <section className="about-story">
          <div className="about-story-text">
            <p className="impact-origin">Our Story</p>
            <h2 className="reveal reveal-delay-1">Care, Community, and Craft.</h2>
            <p className="reveal reveal-delay-2">Pro Nails opened its doors in the early 2000s in the heart of Queen Anne, back when the neighborhood was quieter, and a good nail salon was just what the community needed. We&#39;ve been here ever since.</p>
            <p className="reveal reveal-delay-2">We&#39;re a small, family-run shop who feels strongly about building a community.</p>
            <p className="reveal reveal-delay-3">Our previous owners felt the same and built something real here: a loyal following, a reputation for honest work, and a place that felt like home. We carry that forward every day.</p>
            <a href="#booking" className="btn-red reveal reveal-delay-3" style={{marginTop:'8px'}}>Book an Appointment</a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=700&q=80"
            alt="Inside Pro Nails salon"
            className="about-story-img reveal reveal-delay-2"
          />
        </section>

        <section className="about-values">
          <div className="about-values-head">
            <span className="eyebrow reveal">What We Believe In</span>
            <h2 className="reveal reveal-delay-1">Caring for our community.</h2>
          </div>
          <div className="values-grid">
            <div className="value-card reveal">
              <span className="value-num">★</span>
              <h3>Everyone belongs here</h3>
              <p>We have a door that&#39;s open, a chair that&#39;s ready, and people who are genuinely glad you came in.</p>
            </div>
            <div className="value-card reveal reveal-delay-1">
              <span className="value-num">★</span>
              <h3>Honest work, honest prices</h3>
              <p>We prioritize building trust through upholding integrity and being transparent.</p>
            </div>
            <div className="value-card reveal reveal-delay-2">
              <span className="value-num">★</span>
              <h3>A 20-year track record</h3>
              <p>We&#39;ve grown alongside Queen Anne and we plan to keep growing with it.</p>
            </div>
          </div>
        </section>

        <div className="about-photos">
          <img src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80" alt="Manicure in progress at Pro Nails" className="reveal" />
          <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80" alt="Nail art detail" className="reveal reveal-delay-1" />
        </div>

      </section>

      {/* ============================================================
          CONTACT
      ============================================================ */}
      <section id="contact">

        <div className="section-intro">
          <span className="eyebrow reveal">Get in Touch</span>
          <h2 className="reveal reveal-delay-1">Say <em>hello.</em></h2>
          <p className="reveal reveal-delay-2">Stop by, call, or drop us a message. We&#39;ll get back to you as fast as we can.</p>
        </div>

        <div className="contact-layout">

          <div className="contact-info reveal">
            <h2>Find us in<br /><em>Queen Anne</em></h2>

            <div className="contact-detail">
              <span className="det-label">Address</span>
              <p>1523 Queen Anne Ave N<br />Seattle, WA 98109</p>
            </div>
            <div className="contact-detail">
              <span className="det-label">Phone</span>
              <a href="tel:+12065550182">(206) 270-9999</a>
            </div>
            <div className="contact-detail">
              <span className="det-label">Email</span>
              <a href="mailto:pronails@queenannellc.com">pronails@queenannellc.com</a>
            </div>
            <div className="contact-detail">
              <span className="det-label">Hours</span>
              <p>Monday – Friday: 10:00 AM – 7:00 PM<br />Saturday: 9:00 AM – 6:00 PM<br />Sunday: 10:00 AM – 6:00 PM</p>
            </div>
            <div className="contact-detail">
              <span className="det-label">Walk-Ins</span>
              <p>Walk-ins welcome, subject to availability.<br />Appointments recommended on weekends.</p>
            </div>

            <div className="map-placeholder">
              <p>Map: 1523 Queen Anne Ave N, Seattle</p>
              <a href="https://maps.google.com/?q=1523+Queen+Anne+Ave+N,+Seattle,+WA+98109" target="_blank" rel="noopener">Open in Google Maps ↗</a>
            </div>
          </div>

          <div className="contact-form-col reveal reveal-delay-2">

            <div className="instagram-card">
              <div className="instagram-card-photo">
                <img src="/images/nail3.png" alt="Nail art at Pro Nails" />
                <div className="instagram-card-overlay">
                  <p className="instagram-card-caption"></p>
                </div>
              </div>
              <div className="instagram-card-body">
                <h3 className="instagram-card-title">Find us on Instagram</h3>
                <p>Follow along for nail art inspiration, new styles, and a look inside Pro Nails.</p>
                <a href="https://instagram.com/pronails_queenanne" target="_blank" rel="noopener" className="instagram-btn">@pronails_queenanne →</a>
              </div>
            </div>

            <h2>Send Us a Message</h2>

            <form className="contact-form" id="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-name">Name</label>
                  <input type="text" id="c-name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">Email</label>
                  <input type="email" id="c-email" name="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c-subject">Subject</label>
                <div className="select-wrap">
                  <select id="c-subject" name="subject" defaultValue="">
                    <option value="" disabled>What&#39;s this about?</option>
                    <option>General question</option>
                    <option>Appointment inquiry</option>
                    <option>Pricing or services</option>
                    <option>Feedback or complaint</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" placeholder="What&#39;s on your mind?" rows="6" required></textarea>
              </div>

              <button type="submit" className="btn-red">Send Message</button>

              <div className="form-success">
                Thanks for reaching out! We&#39;ll get back to you within 24 hours.
              </div>
            </form>
          </div>

        </div>

      </section>

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer>
        <div className="footer-main">
          <div>
            <img src="/brand_assets/Pronails_logo.png" alt="Pro Nails" className="footer-brand-logo" />
            <div className="footer-social">
              <a href="https://instagram.com/pronails_queenanne" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Yelp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7 7 0 0 1 5 10a1 1 0 0 1 2 0 5 5 0 0 0 4 4.9V9a1 1 0 0 1 2 0v5.9A5 5 0 0 0 17 10a1 1 0 0 1 2 0 7 7 0 0 1-6 6.93z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#booking">Book Now</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Hours</h4>
            <p>Mon – Fri: 10am – 7pm<br />Saturday: 9am – 6pm<br />Sunday: 10am – 6pm</p>
          </div>
          <div className="footer-col">
            <h4>Visit Us</h4>
            <p>1523 Queen Anne Ave N<br />Seattle, WA 98109<br /><br />(206) 270-9999<br />pronails@queenannellc.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Pro Nails Seattle. All rights reserved.</p>
          <p>★ Queen Anne, Seattle, WA</p>
        </div>
      </footer>

    </>
  );
}
