import React from "react";
import "../styles/About.scss";
import { dancingScript, playfairDisplay } from "./Fonts";

const AboutComp = () => {
  return (
    <div className="about-container">
      <div className={`about-heading ${dancingScript.className}`}>About Me</div>
      <div className={`about-body ${playfairDisplay.className}`}>
        {" "}
        Highly motivated and enthusiastic fresher and possess a good foundation
        in cloud computing principles, virtualization, infrastructure
        management, and C++. Eager to leverage technical expertise and
        problem-solving skills to contribute effectively to real-world projects.
        Flexible team player with good interpersonal skills to collaborate
        effectively with cross-functional teams. Committed to continuous
        learning and professional development in the ever-evolving field of
        technology
      </div>
    </div>
  );
};

export default AboutComp;
