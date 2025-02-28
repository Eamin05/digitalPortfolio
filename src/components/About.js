import React from "react";
import "../styles/About.scss";
import Image from "next/image";
import { dancingScript, playfairDisplay, poppins } from "./Fonts";

const AboutComp = () => {
  return (
    <div className={`about-container ${poppins.className}`}>
      <h2 className={`about-heading`}>About Me</h2>
      <p className={`about-body`}>
        Highly motivated and enthusiastic fresher with a strong foundation in
        cloud computing principles, virtualization, infrastructure management,
        and C++. Eager to leverage technical expertise and problem-solving
        skills to contribute effectively to real-world projects. A flexible team
        player with excellent interpersonal skills, committed to continuous
        learning and professional growth in the ever-evolving field of
        technology.
      </p>
    </div>
  );
};

export default AboutComp;
