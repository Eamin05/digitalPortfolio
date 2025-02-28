import Image from "next/image";
import React from "react";
import { playfairDisplay } from "./Fonts";
import HamburgerMenuComp from "./HamburgerMenu";
import "../styles/Navbar.scss";

const NavbarComp = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-logo-container">
          <Image
            src={"/initials.png"}
            height={80}
            width={80}
            alt="Eamin Khan initials"
            className="initials-logo"
          />
          <Image
            src={"/EK.png"}
            height={80}
            width={200}
            alt="Eamin Khan logo"
          />
        </div>
        <div className="navbar-links-conatiner">
          <ul className={`navbar-links ${playfairDisplay.className}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#tech-stack">Skills</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-hamburger-icon">
          <HamburgerMenuComp />
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
