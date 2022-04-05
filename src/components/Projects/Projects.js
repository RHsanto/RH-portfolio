/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import project1 from '../../image/project-1.png'
import './Projects.css'
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='project'>
     <div className="container">
       <div className="row  my-container">
     <h3 className='title'>Projects</h3>
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
        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, 
        Package Control, Atom Package Manager, and npm.
        </div>
        <ul className='mt-4 d-flex justify-content-end tools'><li>VS Code</li>
         <li> Sublime Text</li>
         <li>Atom</li>
         <li>iTerm2</li>
         <li>Hyper</li></ul>
         <div className="link-up">
           <a target='_blank' href="https://github.com/thekawsarhossain/Docs-client-site"><AiOutlineGithub/></a>
           <a target='_blank' href="https://docs-client-site.vercel.app/"><HiOutlineExternalLink/></a>
         </div>
         </div>
          </div>
        </div>
     {/* project-2 */}
        <div className="col-lg-12">
    <div className="row">
    <div className="col-lg-6 site2 ">
        <p>Blogging Site</p>
        <h3>Docy</h3>
        <div className="info2 ">
        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, 
        Package Control, Atom Package Manager, and npm.
        </div>
        <ul className='mt-4 d-flex p-0 tools-2'>
        <li>VS Code</li>
         <li> Sublime Text</li>
         <li>Atom</li>
         <li>iTerm2</li>
         <li>Hyper</li></ul>
         <div className="link-up">
           <a target='_blank' href="https://github.com/thekawsarhossain/Docs-client-site"><AiOutlineGithub/></a>
           <a target='_blank' href="https://docs-client-site.vercel.app/"><HiOutlineExternalLink/></a>
         </div>
     </div>
     <div className="col-lg-6">
         <div className="projects mt-5">
           <img src={project1} alt="" />
         </div>
    </div>
    </div>
        </div>
         {/* project-3 */}
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
        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, 
        Package Control, Atom Package Manager, and npm.
        </div>
        <ul className='mt-4 d-flex justify-content-end tools'><li>VS Code</li>
         <li> Sublime Text</li>
         <li>Atom</li>
         <li>iTerm2</li>
         <li>Hyper</li></ul>
         <div className="link-up">
           <a target='_blank' href="https://github.com/thekawsarhossain/Docs-client-site"><AiOutlineGithub/></a>
           <a target='_blank' href="https://docs-client-site.vercel.app/"><HiOutlineExternalLink/></a>
         </div>
         <div className="projects-btn">
             <Link to='/projects'>
             Learn more
             </Link>
            </div>
         </div>
          </div>
        </div>
       
       </div>
       
     </div>
    </div>
  );
};

export default Projects;