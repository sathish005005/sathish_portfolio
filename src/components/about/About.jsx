import React from "react";
import "./About.css";
import Button from "../shared/Button";
import Title from "../shared/Title";
import { FaAward } from "react-icons/fa";
import { FiAward, FiUserPlus } from "react-icons/fi";
import { AiOutlineProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <Title text="Get To Know" title="About Me" />
      <div className="about-content">
        <div className="about-image">
          <img src={"/assets/project img.jpeg"} alt="Aayush verma" />
        </div>
        <div className="about-container">
          <div className="content-container">
            <div className="content-box">
              <FiUserPlus/>
              <h3>Experience</h3>
              <p> 8 MONTH IN FULL STACK DEVELOPMENT / BOOTCAMP TRANING(Newton School)</p>
            </div>

            <div className="content-box">
              <FaAward/>
              <h3>Education</h3>
              <p>SRIT-BE</p>
            </div>

            <div className="content-box">
              <AiOutlineProject />
              <h3>Projects</h3>
              <p>10+ projects.</p>
            </div>
          </div>

          <p className="text">
           An individual passionate about developing user-friendly applications with
           excellent problem-solving skills and looking for a challenging position in 
           a reputable organization by utilizing my learning, skillset, and knowledge.
           Possess excellent communication skills. 
          </p>

          <p className="text">
            A passionate coder, always eager to learn new stuff, work on
            different new technologies, and break complex problems into simpler
            steps. Intermediate knowledge in Web development which includes
            HTML,CSS,JavaScript, ReactJs. Also, have a decent knowledge of
            Mysql, MongoDB ,Java and Data Structure.
          </p>

          <a href="#contact">
            <Button text="Let's Talk" position="left" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
