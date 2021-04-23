import React from "react";
import emailjs from 'emailjs-com';
import './contactform.css';

require('dotenv').config();

const USER_ID = process.env.REACT_APP_EMAILJS_ID;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;

const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, 'template_b27tf79', e.target, USER_ID)
      .then((result) => {
          alert('Message Sent, I\'ll get back to you shortly', result.text);
      }, (error) => {
          alert('An error occurred, please try again', error.text);
      });
      e.target.reset();
  };

  return (
    <section className="form-section">
      <p className="form__intro">If you have an idea that you want to discuss with <strong>brand name</strong> send us a message below.</p>
      <form className="form" onSubmit={sendEmail}>
        <div className="form__div">
          <p>Name:</p>
          <input type="text" className="form__input" name="name" placeholder="Your name..." required />
        </div>
        <div className="form__div">
          <p>Email:</p>
          <input className="form__input" type="email" name="email" placeholder="Your email address..." required />
        </div>
        <div className="form__div">
          <p>Message:</p>
          <textarea type="text" name="message" placeholder="Your message..." className="form__input"required />
        </div>
        <button className="btn btn--submit" type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
