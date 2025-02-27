import React from "react";
import { dancingScript, playfairDisplay, poppins } from "./Fonts";
import Image from "next/image";
import { Button } from "antd";
import "../styles/Introduction.scss";
import { ArrowDownOutlined } from "@ant-design/icons";

const IntroductionComp = () => {
  return (
    <div className={`${poppins.className} introduction-container`}>
      <div className="intro-wrapper">
        <div className="intro-part intro-data">
          <h1>Hi, I'm Eamin!</h1>
          <p>
            I'm a passionate developer with experience in React.js, Next.js and
            a love for creating dynamic and responsive web applications. Skilled
            in AWS and DevOps, with expertise in cloud infrastructure, CI/CD,
            and automation. Explore my projects, learn more about my skills, and
            feel free to reach out!
          </p>
          {/* Download Resume Button */}
          <div className="download-resume">
            <Button htmlType="button" className="download-btn" type="primary">
              <a
                href="/resume.pdf" // Make sure to place 'resume.pdf' in the public folder
                download="resume.pdf"
                // className="download-btn"
              >
                Download Resume <ArrowDownOutlined />
              </a>
            </Button>
          </div>
        </div>
        <div className="intro-image">
          <Image src={"/me.png"} width={300} height={200} alt="programmer" />
        </div>
      </div>
    </div>
  );
};

export default IntroductionComp;
