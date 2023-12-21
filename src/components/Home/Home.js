import React from 'react';
import { Link } from 'react-router-dom';
// import Blog from '../Blog/Blog';
import MbProjects from '../Projects/MbProjects';
import Projects from '../Projects/Projects';
import About from './About/About';
import Banner from './Banner';
import './Home.css'
const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <div className='d-none d-lg-block'> <Projects/></div>
      <div className='d-block d-lg-none'> <MbProjects/></div>
      {/* <Blog/> */}
      {/* contact section */}
     <div className="container home-contact">
        <div className="row my-container">
          <div className="col-lg-6 contact-colum text-center">
          <h1 className='contact-title'>Get In Touch</h1>
          <p>I’m currently looking for new opportunities, my inbox is always open. Whether you have a 
            question or just want to say hi, I’ll try my best to get back to you!</p>
            <div className="contact-btn">
             <Link to='/contact'>
             Say Hello
             </Link>
            </div>
          </div>
        </div>
      </div> 
   
    </div>
  );
};

export default Home;