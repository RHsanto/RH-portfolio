/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt1 } from "react-icons/hi";
const Navbar = () => {
  return (
    <div>
     <div className="navigation shadow">
     <div className="container px-0">
       <div className="d-none d-lg-block ">
       <div className=" d-flex justify-content-between items-center nav ">
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
           <NavLink to='/all-projects'>
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
    
         {/* mobile device menu */}
      <div className='d-block d-lg-none'>
       <div className="d-flex justify-content-between align-items-center
        py-2 bg-light text-dark px-4">
       <a className="text-dark" data-bs-toggle="offcanvas" 
       href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
       <HiMenuAlt1 className='fs-1 '/>
       </a>
       <h2 className='pt-2'>  <span className='sub-title'>R</span>
       <span className="learn">akibul</span></h2>
      
       </div>
      <div className="offcanvas offcanvas-start text-dark"
      tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
      <h3 className="offcanvas-title" id="offcanvasExampleLabel">
      <span className='sub-title'>E</span>
      <span className="learn">-learning</span> </h3>
     <button type="button"
     className="btn-close text-reset"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
     <div className="offcanvas-body"> 
 
    <div className="mb-menu">
 
<li> <Link to='/'>Home</Link></li>
<li> <Link to='/reviews'>Reviews</Link></li>
<li> <Link to='/instructor'>Expert Instructor</Link></li>
 <li>  <Link to='/popular-course'>Popular Courses</Link></li>
 <li><Link to='/news-blogs'> Blogs</Link></li>

 </div>
</div>
</div>
       </div>
     </div>
   </div>
    </div>
  );
};

export default Navbar;