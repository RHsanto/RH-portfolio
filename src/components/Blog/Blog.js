/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Blog.css'
import Nextjs from '../../image/next.png'
import Redux from '../../image/redux.jpeg'
import Typescripts from '../../image/TypeScriptImage.jpeg'
const Blog = () => {
  return (
    <div>
     <div className="container">   
     <div class="row blogs my-container g-4">
     <h3 className="title py-5">Blogs Here</h3>
  <div class="col-sm-4">
    <div class="B-card rounded">
      <img src={Nextjs} alt="img"/>
      <div class="card-body ">
        <h5 class="card-title py-2">What is Next.js</h5>
        <p class="card-text mb-4">
        Next.js is an open-source web development framework built on top of Node.js
         enabling React-based web applications . . .</p>
        <a href="https://nextjs.org" target='_blank' class="card-btn">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="B-card rounded">
    <img src={Redux} alt="img"/>
      <div class="card-body p-4">
        <h5 class="card-title py-2">What is Redux</h5>
        <p class="card-text mb-4">Redux is an open-source JavaScript library for managing and 
        centralizing the application state. It is most . . .</p>
        <a href="https://redux.js.org" target='_blank' class="card-btn">Read More</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="B-card rounded">
    <img src={Typescripts} alt="img"/>
      <div class="card-body p-4">
        <h5 class="card-title py-2">What is Typescripts</h5>
        <p class="card-text mb-4">TypeScript is a programming 
        language developed and maintained by Microsoft. It is a strict syntactical superset . . .</p>
        <a href="https://www.typescriptlang.org" target='_blank' class="card-btn">Read More</a>
      </div>
    </div>
  </div>
 
</div>
     </div>
    </div>
  );
};

export default Blog;