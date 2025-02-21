import Image from "next/image";
import React from "react";
import "../styles/Navbar.scss";
import { playfairDisplay } from "./Fonts";

const NavbarComp = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <Image src={"/EK.png"} height={200} width={300} alt="Eamin Khan logo" />
      </div>
      <div className="navbar-links-conatiner">
        <ul className={`navbar-links ${playfairDisplay.className}`}>
          <li>
            <a href="#home" >
              Home
            </a>
          </li>
          <li>
          <a href="#about">About</a>
          </li>
          <li>
          <a href="#projects">Projects</a>
          </li>
          <li>
          <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComp;
