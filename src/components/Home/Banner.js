/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Banner = () => {
  return (
 <div className='container '>
 <div className="row">
   <div className="introduce text-light col-lg-6 my-container">
   <p className='hi'>Hi, my name is</p>
<h1>Rakibul Hasan</h1>
<h1>I 'm a Web Developer</h1>
   <p className='mt-4'>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/
      IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
   
      <div className='d-flex  mt-5  align-items-center button-section  '>
        <a class="resume-button  " target="blank" href="https://www.linkedin.com/in/rakibul-hasan-santo/"> HIRE ME</a> 

       <a className=' ms-4 resume' href="https://drive.google.com/uc?export=download&id=1r6t8GhN25JD4jOrYwv5NRCtZxk_UJary" target='_blank'>
<i class="fas fa-file-download"></i>  RESUME</a></div> 
   </div>
  
 </div>

   </div>
  );
};

export default Banner;