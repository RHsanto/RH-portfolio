/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     <div className="navigation">
     <div className="container-fluid">
       <div className=" d-flex justify-content-between nav">
        <NavLink to='/home'>
        <div className="logo"><h2>Rakibul</h2></div>
        </NavLink>
         <div className="">
           <ul className="menu-lists">
           <NavLink to='/home' >
           <li>Home</li>
           </NavLink>
           <NavLink to='/about'>
           <li>About</li>
           </NavLink>
           <NavLink to='/projects'>
           <li>Projects</li>
           </NavLink>
            <NavLink to='/blog'>
            <li>Blog</li>
            </NavLink>
           <NavLink to='/contact'>
           <li>Contact</li>
           </NavLink>
            <li>
            <a className='resume-button  ' href="https://drive.google.com/uc?export=download&id=1r6t8GhN25JD4jOrYwv5NRCtZxk_UJary" target='_blank'>
             <i class="fas fa-file-download"></i>  RESUME</a>
       </li> 
           </ul>

         </div>
       </div>
     </div>
   </div>
    </div>
  );
};

export default Navbar;