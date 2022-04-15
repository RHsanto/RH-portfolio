import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Projects from '../Projects/Projects';
import About from './About/About';
import Banner from './Banner';
import './Home.css'
const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Projects/>
      <Blog/>
      {/* contact section */}
     <div className="container contact-section">
        <div className="row my-5 my-container">
          <div className="col-lg-6 mx-auto contact text-center">
          <h1>Get In Touch</h1>
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