import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
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
      <Contact/>
    </div>
  );
};

export default Home;