import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { GoProject } from "react-icons/go";

const Navbar = () => {
  const [isActive, setIsActive] = useState("#home");

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => setIsActive("#home")}
            className={isActive === "#home" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setIsActive("#about")}
            className={isActive === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={() => setIsActive("#experience")}
            className={isActive === "#experience" ? "active" : ""}
          >
            <BiBook />
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => setIsActive("#portfolio")}
            className={isActive === "#portfolio" ? "active" : ""}
          >
            <GoProject />
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setIsActive("#contact")}
            className={isActive === "#contact" ? "active" : ""}
          >
            <BiMessageDetail />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
