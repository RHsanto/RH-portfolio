import React from 'react';
import profile from '../../../image/profile.png'
const About = () => {
  return (
    <div className='container '>
      <div className="row  my-container about">
        <div className="col-lg-6 about-info">
          <h3 className='title'>About me</h3>
         <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a 
           custom weblog button taught me a lot about HTML & CSS!</p>
           <p>Fast-forward to today,
              and I’ve had the privilege of working at an 
              advertising agency, a start-up, 
              a huge corporation, and a student-led design studio. 
              My main focus these days is building accessible,
               inclusive products and digital experiences at Instatement
                for a variety of clients.</p>

                <p>I also recently launched a course that covers everything you need to
                   build a web app with the Spotify API using Node & React.</p>
                   <div className="skill">
                     <p>Here are a few technologies I’ve been working with recently:</p>
                     <ul className='d-flex '>
                       <div className="div">
                       <li>JavaScript (ES6+)</li>
                       <li>TypeScript</li>
                       <li>React</li>
                       </div>
                       <div className="div ms-5">
                       <li>Next.js</li>
                       <li>Node.js</li>
                       <li>Redux</li>
                       </div>
                     </ul>
                   </div>
        </div>
        <div className="col-lg-6 profile px-5">
         
         <img src={profile} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default About;