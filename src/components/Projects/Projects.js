/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import project1 from "../../image/project-1.png";
import project3 from "../../image/mr-travel.png";
import project2 from "../../image/s.PNG";
import "./Projects.css";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="project">
      <div className="container">
        <div className="row  my-container">
          <h3 className="title">Projects</h3>
          {/* project-1 */}
          <div className="col-lg-12 ">
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
                  The goal of the project is to facilitate documentation or blog posting and to help
                  create different types of documentation or blogs. It allows any user to view
                  anyone's blog without any restrictions.
                </div>
                <ul className="mt-4 tools">
                  <li>Next.js</li>
                  <li>Redux</li>
                  <li>Material UI</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Draft.js</li>
                </ul>
                <div className="link-up">
                  <a target="_blank" href="https://github.com/thekawsarhossain/Docs-client-site">
                    <AiOutlineGithub />
                    <h6>Client</h6>
                  </a>
                  <a target="_blank" href="https://github.com/RHsanto/docy-server-site">
                    <AiOutlineGithub />
                    <h6>Server</h6>
                  </a>
                  <a target="_blank" href="https://docs-client-site.vercel.app/">
                    <HiOutlineExternalLink />
                    <h6>Live</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* project-2 */}
          <div className="col-lg-12 ">
            <div className="row">
              <div className="col-lg-6 site2 ">
                <p>MERN stack Site</p>
                <h3>MR-TRAVEL</h3>
                <div className="info2 ">
                  MR-Travel is a booking-related MERN stack website. Where users can view and order
                  various travel-related information. And if you want, you can order different
                  flights, hotels, and tour packages. The administrator can approve orders, and
                  delete and add new products.
                </div>
                <ul className="mt-4 tools">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>Axios</li>
                  <li>React Toastify</li>
                  <li>Bootstrap</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                </ul>
                <div className="link-up">
                  <a
                    target="_blank"
                    href="https://github.com/RHsanto/Mr-Travel"
                  >
                    <AiOutlineGithub />
                    <h6>Client</h6>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/RHsanto/Mr_Travel_Server"
                  >
                    <AiOutlineGithub />
                    <h6>Server</h6>
                  </a>
                  <a target="_blank" href="https://mr-travel.vercel.app">
                    <HiOutlineExternalLink />
                    <h6>Live</h6>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="projects mt-5">
                  <img src={project3} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* project-3 */}
          <div className="col-lg-12 ">
            <div className="row div">
              <div className="col-lg-6 ">
                <div className="projects mt-5">
                  <img src={project2} alt="" />
                </div>
              </div>
              <div className="col-lg-6 site ">
                <p>Learning Management site</p>
                <h3>E-learning</h3>
                <div className="info ">
                  This website has never been fully created. There is some work left in the back-end
                  of it which is in process. I hope this project will be completed soon.
                </div>
                <ul className="mt-4 tools">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>React icon</li>
                  <li>Vercel</li>
                </ul>
                <div className="link-up">
                  <a target="_blank" href="https://github.com/RHsanto/learning-management-system">
                    <AiOutlineGithub />
                    <h6>Client</h6>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/RHsanto/learning-management--server-site"
                  >
                    <AiOutlineGithub />
                    <h6>Server</h6>
                  </a>
                  <a target="_blank" href="https://learning-management-system-theta.vercel.app/">
                    <HiOutlineExternalLink />
                    <h6>Live</h6>
                  </a>
                </div>
                <div className="projects-btn">
                  <Link to="/all-projects">See all Projects</Link>
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

