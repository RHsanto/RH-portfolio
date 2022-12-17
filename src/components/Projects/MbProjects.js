/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
const MbProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then(response => response.json())
      .then(data => setProjects(data.slice(0, 3)));
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row  gy-4 gx-1">
          <h2 className="title">My Work</h2>
          {projects.map(data => (
            <div className="col-lg-4 mb-card">
              <img src={data?.img} alt="" />
              <div className="mb-info ">
                <h4 className="mb-4">{data?.name}</h4>
                <p className="text-dark">{data?.description}</p>
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
                  <a target="_blank" href={data?.client}>
                    <AiOutlineGithub />
                    <h6>Client</h6>
                  </a>
                  <a target="_blank" href={data?.server}>
                    <AiOutlineGithub />
                    <h6>Server</h6>
                  </a>
                  <a target="_blank" href={data?.live}>
                    <HiOutlineExternalLink />
                    <h6>Live</h6>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MbProjects;
