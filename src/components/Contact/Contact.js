/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Contact.css'
import Projects from '../../image/project-1.png'
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const Contact = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row  gy-4 gx-1">
          <div className="col-lg-4 mb-card">
            <img src={Projects} alt="" />
          <div className="mb-info ">
          <h4 className='mb-4'>Halcyon Theme</h4>
           <p className='text-dark'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
             </p>
             <div className=" tools text-start ">
             <li>HTML</li>
          <li>CSS</li>
        <li>React</li>
        <li>Material UI</li>
        <li>Bootstrap</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Firebase</li>
             </div>
             <div className="mb-link-up">
          <a target='_blank' href="https://github.com/RHsanto/racing-car-project-client-side">
            <AiOutlineGithub/><h6>Client</h6></a>
          <a target='_blank' href="https://github.com/RHsanto/racing-car-project-server-side">
            <AiOutlineGithub/><h6>Server</h6></a>
          <a target='_blank' href="https://vibrant-leavitt-6ff91c.netlify.app">
            <HiOutlineExternalLink/><h6>Live</h6></a>
        </div>
          </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Contact;