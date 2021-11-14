import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div class='ContactBody'>
      <div class='container-contact'>
        <div class='content'>
          <div class='left-side'>
            <div class='address details'>
              <i class='fas fa-map-marker-alt'></i>
              <div class='topic'>Address</div>
              <div class='text-one'>NSIT</div>
              <div class='text-two'>New Delhi 75</div>
            </div>
            <div class='phone details'>
              <i class='fas fa-phone-alt'></i>
              <div class='topic'>Phone</div>
              <div class='text-one'>+91 123456789</div>
              <div class='text-two'>+91 123456789</div>
            </div>
            <div class='email details'>
              <i class='fas fa-envelope'></i>
              <div class='topic'>Email</div>
              <div class='text-one'>OurResopectiveEmail@gmail.com</div>
              <div class='text-two'>info.Nsit@gmail.com</div>
            </div>
          </div>
          <div class='right-side'>
            <div class='topic-text'>Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you.
            </p>
            <form action='#'>
              <div class='contact-input-box'>
                <input type='text' placeholder='Enter your name' />
              </div>
              <div class='contact-input-box'>
                <input type='text' placeholder='Enter your email' />
              </div>
              <div class='contact-input-box message-box'>
                <textarea placeholder='Enter your message' />
              </div>
              <div class='button'>
                <input type='button' value='Send Now' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
