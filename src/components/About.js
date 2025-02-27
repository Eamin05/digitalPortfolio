import React from "react";
import "../styles/About.scss";
import Image from "next/image";
import { dancingScript, playfairDisplay } from "./Fonts";

const AboutComp = () => {
  return (
    <div className="about-container">
      <h2 className={`about-heading ${dancingScript.className}`}>About Me</h2>
      <p className={`about-body ${playfairDisplay.className}`}>
        Highly motivated and enthusiastic fresher with a strong foundation in
        cloud computing principles, virtualization, infrastructure management,
        and C++. Eager to leverage technical expertise and problem-solving
        skills to contribute effectively to real-world projects. A flexible team
        player with excellent interpersonal skills, committed to continuous
        learning and professional growth in the ever-evolving field of
        technology.
      </p>

      {/* Tech Stack Section */}
      <div className="tech-stack">
        <h3 className={`about-heading ${dancingScript.className}`}>
          Tech Stack
        </h3>
        <div className="tech-icons-container">
          {/* HTML */}
          <div className="tech-icon">
            <Image src={"/html.svg"} width={100} height={100} alt="HTML" />
            <div className="tech-stack-overlay overlay-html">
              <div className={`text ${playfairDisplay.className}`}>HTML 5</div>
            </div>
          </div>
          {/* CSS */}
          <div className="tech-icon">
            <Image src={"/css.svg"} width={100} height={100} alt="HTML" />
            <div className="tech-stack-overlay overlay-css">
              <div className={`text ${playfairDisplay.className}`}>CSS</div>
            </div>
          </div>
          {/* SASS */}
          <div className="tech-icon">
            <Image src={"/sass.svg"} width={100} height={100} alt="HTML" />
            <div className="tech-stack-overlay overlay-sass">
              <div className={`text ${playfairDisplay.className}`}>SASS</div>
            </div>
          </div>
          {/* javascript */}
          <div className="tech-icon">
            <Image
              src={"/javascript.svg"}
              width={100}
              height={100}
              alt="HTML"
            />
            <div className="tech-stack-overlay overlay-js">
              <div className={`text ${playfairDisplay.className}`}>JS</div>
            </div>
          </div>
          {/* React */}
          <div className="tech-icon">
            <Image src={"/reactjs.svg"} width={100} height={100} alt="HTML" />
            <div className="tech-stack-overlay overlay-react">
              <div className={`text ${playfairDisplay.className}`}>
                REACT JS
              </div>
            </div>
          </div>
          {/* Next */}
          <div className="tech-icon">
            <Image src={"/nextjs.svg"} width={100} height={100} alt="HTML" />
            <div className="tech-stack-overlay overlay-next">
              <div className={`text ${playfairDisplay.className}`}>NEXT JS</div>
            </div>
          </div>
          {/* ant */}
          <div className="tech-icon">
            <Image
              src={"/ant-design.svg"}
              width={100}
              height={100}
              alt="HTML"
            />
            <div className="tech-stack-overlay overlay-ant">
              <div className={`text ${playfairDisplay.className}`}>
                ANT DESIGN
              </div>
            </div>
          </div>

          {/* AWS */}
          <div className="tech-icon">
            <Image src={"/aws.svg"} width={100} height={100} alt="HTML" />
            <div className="tech-stack-overlay overlay-aws">
              <div className={`text ${playfairDisplay.className}`}>AWS</div>
            </div>
          </div>

          {/* github */}
          <div className="tech-icon">
            <Image src={"/github.svg"} width={100} height={100} alt="HTML" />
            <div className="tech-stack-overlay overlay-github">
              <div className={`text ${playfairDisplay.className}`}>GITHUB</div>
            </div>
          </div>
          {/* gitlab */}
          <div className="tech-icon">
            <Image src={"/git-lab.svg"} width={100} height={100} alt="HTML" />
            <div className="tech-stack-overlay overlay-gitlab">
              <div className={`text ${playfairDisplay.className}`}>GIT LAB</div>
            </div>
          </div>

          {/* jira */}
          <div className="tech-icon">
            <Image src={"/jira.svg"} width={100} height={100} alt="HTML" />
            <div className="tech-stack-overlay overlay-jira">
              <div className={`text ${playfairDisplay.className}`}>JIRA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
