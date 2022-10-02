import React from "react";
import './Contact.css'

const Contact = () => {
  
  return (
    
    <div>

    <div className="contact-section">


      <h1>Contact Us</h1>
      <div className="border"></div>
      <form className="contact-form" action="index.html" method="post">
        <input type="text" className="contact-form-text" placeholder="Your Name" />
        <input type="email" className="contact-form-text" placeholder="Your Email" />
        <input type="text" className="contact-form-text" placeholder="Your Mobile No." />
        <textarea className="contact-form-text" placeholder="Your Feedback"></textarea>
        <input type="submit" className="contact-form-btn" value="Send" />

      </form>
    


   
        

    </div>
   
    </div>
  );
};

export default Contact;

