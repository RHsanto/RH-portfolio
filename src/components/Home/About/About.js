/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import profile from "../../../image/profile-pic (9).png";
import { FiGithub, FiInstagram, FiLinkedin, FiCodepen } from "react-icons/fi";

const About = () => {
  return (
    <div className="container ">
      <div className="row  my-container about g-4">
        <div className="col-lg-6 about-info">
          <h3 className="title ">About me</h3>
          <p className="mt-4">
            Hello! My name is Rakibul and I enjoy creating things on the internet. I am a
            self-motivated and enthusiastic web developer with a keen interest in JavaScript. I am a
            programmer with a good level of expertise in front-end web development. I am a
            technology lover. I am interested in MERN (ReactJS, NextJS, MongoDB, ExpressJS, NodeJS)
            stack web development.
          </p>
          <p>
            Nowadays my main focus is to create different types of projects using new technologies
            and to further enhance my skills by learning new technologies.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className=" skills">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Redux</li>
          </div>
        </div>
        <div className="col-lg-6 profile px-5">
          <img src={profile} alt="img" />
          <div className="abouts"></div>
          <div className="about-border"></div>
        </div>
      </div>
      <div className="side-link d-none d-lg-block shadow">
        <li>
          <a target="blank" href="https://github.com/RHsanto">
            <FiGithub />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a target="blank" href="https://www.instagram.com/rakibul_hasan008/">
            <FiInstagram />
          </a>
        </li>
        <li>
          <a target="blank" href="https://www.linkedin.com/in/rakibul-hasan-santo/">
            <FiLinkedin />
          </a>
        </li>
        <li>
          {" "}
          <a target="blank" href="https://codepen.io/santo-rh">
            <FiCodepen />
          </a>
        </li>
      </div>
    </div>
  );
};

export default About;
