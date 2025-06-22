import { useState } from "react";
import "./contactUs.scss";

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contactPage">
      <div className="contactCard">
        {submitted ? (
          <div className="thankYou">
            <h1>🎉 Thank You!</h1>
            <p>Your message has been received. We'll get back to you soon!</p>
          </div>
        ) : (
          <>
            <h1>Contact Us</h1>
            <p>
              Have questions or want to connect? Fill out the form below and our
              team will get in touch.
            </p>
            <form className="contactForm" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
