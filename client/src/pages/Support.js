import React from "react";
import "./../style.css";

function Support() {
  return (
    <div className="support-page">
      {/* Header */}
      <section className="support-header">
        <h1>How Can We Help?</h1>
        <p>
          Get the support you need. Browse our FAQs, contact our team, or start
          a live chat.
        </p>
      </section>

      {/* Support Options */}
      <section className="support-options">
        <div className="support-card">
          <span className="icon">📧</span>
          <h3>Email Support</h3>
          <p>Get help via email</p>
          <p className="highlight">support@eventra.com</p>
          <small>Response within 24 hours</small>
        </div>

        <div className="support-card">
          <span className="icon">📞</span>
          <h3>Phone Support</h3>
          <p>Talk to our team</p>
          <p className="highlight">1234567890</p>
          <small>Mon-Fri, 9AM-6PM EST</small>
        </div>

        <div className="support-card">
          <span className="icon">💬</span>
          <h3>Live Chat</h3>
          <p>Instant help available</p>
          <button className="chat-btn">Start Chat</button>
          <small>Average response: 2 minutes</small>
        </div>
      </section>

      {/* FAQ + Contact */}
      <section className="faq-contact">
        {/* FAQ */}
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <input type="text" placeholder="Search FAQs..." className="faq-search" />

          <div className="faq-item">
            <h4>How do I book an event ticket?</h4>
            <p>You can book tickets through the Explore Events section.</p>
          </div>

          <div className="faq-item">
            <h4>Can I cancel or refund my ticket?</h4>
            <p>Yes, refunds are available depending on organizer policies.</p>
          </div>

          <div className="faq-item">
            <h4>How do I create an event as an organizer?</h4>
            <p>Go to Create Event and follow the guided steps.</p>
          </div>
        </div>

        {/* Contact Us Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name *" required />
            <input type="email" placeholder="Email *" required />
            <select>
              <option>Select a category</option>
              <option>Ticket Issue</option>
              <option>Event Creation</option>
              <option>Payment</option>
              <option>Other</option>
            </select>
            <input type="text" placeholder="Subject *" required />
            <textarea placeholder="Describe your issue..." rows="5" required></textarea>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Support;
