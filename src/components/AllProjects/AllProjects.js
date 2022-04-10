/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import project1 from '../../image/project-1.png'
import project2 from '../../image/project-2.png'
import project3 from '../../image/project-3.png'
import project4 from '../../image/p-4.PNG'
import project5 from '../../image/project-5.PNG'
import project6 from '../../image/project-6.PNG'
import '../Projects/Projects.css'
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const AllProjects = () => {
  return (
    <div className='project'>
    <div className="container">
      <div className="row all ">
    <h3 className='all-title '>My Recent Projects</h3>
    {/* project-1 */}
       <div className="col-lg-12">
         <div className="row div">
         <div className="col-lg-6 ">
        <div className="projects mt-5">
          <img src={project1} alt="" />
        </div>
        </div>
        <div className="col-lg-6 site ">
       <p>Blogging Site</p>
       <h3>Docy</h3>
       <div className="info ">
       The goal of the project is to facilitate documentation or blog posting and to help create different types of
        documentation or blogs. It allows any user to view anyone's blog without any restrictions.
       </div>
       <ul className='mt-4 tools'>
        <li>Next.js</li>
        <li>Redux</li>
        <li>Material UI</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Draft.js</li>
        
        </ul>
        <div className="link-up">
          <a target='_blank' href="https://github.com/thekawsarhossain/Docs-client-site">
            <AiOutlineGithub/><h6>Client</h6></a>
          <a target='_blank' href="https://github.com/RHsanto/docy-server-site">
            <AiOutlineGithub/><h6>Server</h6></a>
          <a target='_blank' href="https://docs-client-site.vercel.app/">
            <HiOutlineExternalLink/><h6>Live</h6></a>
        </div>
        </div>
         </div>
       </div>
    {/* project-2 */}
       <div className="col-lg-12">
   <div className="row">
   <div className="col-lg-6 site2 ">
       <p>MERN stack Site</p>
       <h3>Motorcycle</h3>
       <div className="info2 ">
       Motorcycle is a niche product-related MERN stack website. Where users can view, order and delete products.
        And admin orders can be approved, delete, and add new products.
       </div>
       <ul className='mt-4 tools'>
       <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Material UI</li>
        <li>Bootstrap</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        
        </ul>
        <div className="link-up">
          <a target='_blank' href="https://github.com/RHsanto/racing-car-project-client-side">
            <AiOutlineGithub/><h6>Client</h6></a>
          <a target='_blank' href="https://github.com/RHsanto/racing-car-project-server-side">
            <AiOutlineGithub/><h6>Server</h6></a>
          <a target='_blank' href="https://vibrant-leavitt-6ff91c.netlify.app">
            <HiOutlineExternalLink/><h6>Live</h6></a>
        </div>
    </div>
    <div className="col-lg-6">
        <div className="projects mt-5">
          <img src={project3} alt="" />
        </div>
   </div>
   </div>
       </div>
        {/* project-3 */}
        <div className="col-lg-12">
         <div className="row div">
         <div className="col-lg-6 ">
        <div className="projects mt-5">
          <img src={project2} alt="" />
        </div>
        </div>
        <div className="col-lg-6 site ">
       <p>Educational site</p>
       <h3>Educal</h3>
       <div className="info ">
       This is an educational website. Where there are courses and events in different educational categories. Which the user can order if he 
       wants and the user can give his opinion about the course.
       </div>
       <ul className='mt-4 tools'>
        <li>React</li>
        <li>Redux</li>
        <li>Material UI</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Swiper.js</li>
        </ul>
        <div className="link-up">
          <a target='_blank' href="https://github.com/RHsanto/edual-project">
            <AiOutlineGithub/><h6>Client</h6></a>
          <a target='_blank' href="https://github.com/RHsanto/team-89-project-server-site">
            <AiOutlineGithub/><h6>Server</h6></a>
          <a target='_blank' href="https://team-education-site.netlify.app/">
            <HiOutlineExternalLink/><h6>Live</h6></a>
        </div>
        </div>
         </div>
       </div>
      
      </div>
      <div className="row  my-container">
   
    {/* project-4 */}
       <div className="col-lg-12">
         <div className="row div">
         <div className="col-lg-6 ">
        <div className="projects mt-5">
          <img src={project4} alt="" />
        </div>
        </div>
        <div className="col-lg-6 site ">
       <p>Blogging Site</p>
       <h3>Docy</h3>
       <div className="info ">
       The goal of the project is to facilitate documentation or blog posting and to help create different types of
        documentation or blogs. It allows any user to view anyone's blog without any restrictions.
       </div>
       <ul className='mt-4 tools'>
        <li>Next.js</li>
        <li>Redux</li>
        <li>Material UI</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Draft.js</li>
        
        </ul>
        <div className="link-up">
          <a target='_blank' href="https://github.com/thekawsarhossain/Docs-client-site">
            <AiOutlineGithub/><h6>Client</h6></a>
          <a target='_blank' href="https://github.com/RHsanto/docy-server-site">
            <AiOutlineGithub/><h6>Server</h6></a>
          <a target='_blank' href="https://docs-client-site.vercel.app/">
            <HiOutlineExternalLink/><h6>Live</h6></a>
        </div>
        </div>
         </div>
       </div>
    {/* project-5 */}
       <div className="col-lg-12">
   <div className="row">
   <div className="col-lg-6 site2 ">
       <p>MERN stack Site</p>
       <h3>Motorcycle</h3>
       <div className="info2 ">
       Motorcycle is a niche product-related MERN stack website. Where users can view, order and delete products.
        And admin orders can be approved, delete, and add new products.
       </div>
       <ul className='mt-4 tools'>
       <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Material UI</li>
        <li>Bootstrap</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        
        </ul>
        <div className="link-up">
          <a target='_blank' href="https://github.com/RHsanto/racing-car-project-client-side">
            <AiOutlineGithub/><h6>Client</h6></a>
          <a target='_blank' href="https://github.com/RHsanto/racing-car-project-server-side">
            <AiOutlineGithub/><h6>Server</h6></a>
          <a target='_blank' href="https://vibrant-leavitt-6ff91c.netlify.app">
            <HiOutlineExternalLink/><h6>Live</h6></a>
        </div>
    </div>
    <div className="col-lg-6">
        <div className="projects mt-5">
          <img src={project5} alt="" />
        </div>
   </div>
   </div>
       </div>
        {/* project-6 */}
        <div className="col-lg-12">
         <div className="row div">
         <div className="col-lg-6 ">
        <div className="projects mt-5">
          <img src={project6} alt="" />
        </div>
        </div>
        <div className="col-lg-6 site ">
       <p>Educational site</p>
       <h3>Educal</h3>
       <div className="info ">
       This is an educational website. Where there are courses and events in different educational categories. Which the user can order if he 
       wants and the user can give his opinion about the course.
       </div>
       <ul className='mt-4 tools'>
        <li>React</li>
        <li>Redux</li>
        <li>Material UI</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Swiper.js</li>
        </ul>
        <div className="link-up">
          <a target='_blank' href="https://github.com/RHsanto/edual-project">
            <AiOutlineGithub/><h6>Client</h6></a>
          <a target='_blank' href="https://github.com/RHsanto/team-89-project-server-site">
            <AiOutlineGithub/><h6>Server</h6></a>
          <a target='_blank' href="https://team-education-site.netlify.app/">
            <HiOutlineExternalLink/><h6>Live</h6></a>
        </div>
      
        </div>
         </div>
       </div>
      
      </div>
      
    </div>
   </div>
  );
};

export default AllProjects;