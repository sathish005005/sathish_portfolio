import React from "react";
import "./Footer.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="logo">Sathish</div>
        <nav className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="social-media">
          <a
            href="https://www.instagram.com/sathish_gss_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/sathish-s-09aa24224/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/sathish005005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </div>
        <div className="description">
          © {new Date().getFullYear()} Sathish. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
