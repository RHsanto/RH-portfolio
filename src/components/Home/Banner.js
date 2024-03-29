/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Lafalafi from "./Lafalafi";

const Banner = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="introduce text-light col-lg-6 my-container">
          <div className="hi">Hi, my name is</div>
          <h1 className="name">Rakibul Hasan</h1>
          <h2>
            <Lafalafi />{" "}
          </h2>
          <p className="mt-4">
            Hello! I am Rakibul. A self-motivated and enthusiastic web developer with a keen
            interest in JavaScript. I am a programmer with a good level of expertise in front-end
            web development. I am a technology lover. I am interested in MERN (ReactJS, NextJS,
            MongoDB, ExpressJS, NodeJS) stack web development.
          </p>

          <div className="d-flex align-items-center button-section  ">
            <a
              class="resume-button  "
              target="blank"
              href="https://www.linkedin.com/in/rakibul-hasan-santo/"
            >
              {" "}
              HIRE ME
            </a>

            <a
              className=" ms-4 resume"
              href="https://drive.google.com/file/d/12WFkBmjmO7HI7NfTKpdFfBBng7sShCGI/view?usp=sharing "
              target="_blank"
            >
              <i class="fas fa-file-download"></i> RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
