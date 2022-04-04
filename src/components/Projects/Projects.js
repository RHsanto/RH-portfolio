import React from 'react';
import project1 from '../../image/project-1.png'
import './Projects.css'
const Projects = () => {
  return (
    <div className='project'>
     <div className="container">
       <div className="row my-container">
     <h3 className='title'>Projects</h3>
         <div className="col-lg-6">
         <div className="projects mt-5">
           <img src={project1} alt="" />
         </div>
         </div>
         <div className="col-lg-6 site">
        <p>Bloging Site</p>
        <h3>Docy</h3>
        <div className="info">
        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, 
        Package Control, Atom Package Manager, and npm.
        </div>
        <p className='mt-4'>VS Code
         Sublime Text
         Atom
         iTerm2
         Hyper</p>
         </div>
       </div>
     </div>
    </div>
  );
};

export default Projects;