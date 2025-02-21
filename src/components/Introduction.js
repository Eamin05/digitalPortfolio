import React from "react";
import "../styles/Introduction.scss";
import { dancingScript, playfairDisplay } from "./Fonts";
import Image from "next/image";

const IntroductionComp = () => {
  return (
    <div className="introduction-container">
      <div className={`intro-part intro-data`}>
        <h3 className={`${dancingScript.className}`}>Introduction</h3>
        <p className={`${playfairDisplay.className}`}>
          Hi, I'm Eamin, A passionate developer with experience in React.js,
          Next.js and a love for creating dynamic and responsive web
          applications. Skilled in AWS and DevOps, with expertise in cloud
          infrastructure, CI/CD, and automation. Explore my projects, learn more
          about my skills, and feel free to reach out!
        </p>
      </div>
      <div className="intro-part">
        <Image src={"/main.png"} width={600} height={300} alt="programmer" />
      </div>
    </div>
  );
};

export default IntroductionComp;
