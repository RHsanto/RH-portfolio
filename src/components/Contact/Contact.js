/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Contact.css'
import { ImLocation2 } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {

  const handleSend=()=>{
    alert('Thanks for Your Message')
  }
  return (
    <div className="contact-section">
      <div className='container'>
      <div className="contact-me">
        <h1 className="contact-me-title text-center ">Lets talk !</h1>
     <div className="row ">
       <div className="col-lg-6">
       <form action="">
       <div class="form-floating mb-3">
          <input  type="text" name="name"  class="form-control" id="floatingInput1" placeholder="name@example.com"/>
          <label for="floatingInput1">Your Name</label>
      </div>
       <div class="form-floating mb-3">
          <input  type="email" name="name"  class="form-control" id="floatingInput1" placeholder="name@example.com"/>
          <label for="floatingInput1">Your Email</label>
      </div>
      <div class="form-floating">
       <textarea class="form-control"  name="message" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
       <label for="floatingTextarea">Comments</label>
      </div>
      <div onClick={handleSend} className='send my-5'>Send </div>
       </form>
       </div>
       <div className="col-lg-6">
       <div className="connected text-center">
       <h2 className='contact-title'>Connect with me</h2>
          <p><ImLocation2/> Sonargoan, Narayongonj, Dhaka</p>
          <p><FiPhoneCall/> +8801887403752</p>
       </div>
       </div>
     </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;