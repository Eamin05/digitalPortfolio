import React from "react";
import { dancingScript, playfairDisplay, poppins } from "./Fonts";
import { GithubOutlined } from "@ant-design/icons";
import "../styles/Projects.scss";

const ProjectsComp = () => {
  return (
    <div className="projects-container">
      <div className={`projects-wrapper ${poppins.className}`}>
        <div className="projects-heading">
          <h1>My projects</h1>
        </div>
        <div className="projects-cards">
          <div className="proj-card">
            <p className={`proj-heading`}>
              Cloud Based Secure Banking Application
            </p>
            <p className={`proj-desc`}>
              {" "}
              Designed and launched a cloud-based banking application. The
              application uses cloud services such as Amazon RDS, CloudFront,
              S3, CloudFormation, Auto Scaling, Application Load Balancer,
              CodeDeploy, CodeBuild, CodePipeline, and CodeCommit. Using
              CloudFormation to automate infrastructure provisioning &
              integration with CodeDeploy, CodeBuild, CodePipeline, and
              CodeCommit streamlines the deployment process, enabling continuous
              integration and delivery (CI/CD). Furthermore, application
              security is enhanced employing encryption protocols, multi-factor
              authentication, access control and continuous monitoring
              mechanisms.
            </p>
            <p className="proj-links">
              <a href="https://github.com/UnicornBank-MajorProject/UnicornBank.git">
                <GithubOutlined />
                Github
              </a>
            </p>
          </div>

          <div className="proj-card">
            <p className={` proj-heading`}>
              Cloud Based Super Car E-Commerce Website
            </p>
            <p className={` proj-desc`}>
              {" "}
              Launched a website on the cloud infrastructure utilizing cloud
              services including CloudFront, S3, CloudFormation, Auto Scaling,
              Application Load Balancer, CodeDeploy, CodeBuild, CodePipeline,
              and CodeCommit. Leveraging CloudFront for content delivery network
              (CDN) acceleration and S3 for storage to achieve higher
              performance and reliability. Using CloudFormation to automate
              infrastructure provisioning. Integration with CodeDeploy,
              CodeBuild, CodePipeline, and CodeCommit streamlines the deployment
              process, enabling continuous integration and delivery (CI/CD) for
              rapid and reliable updates to the website.
            </p>
            <p className="proj-links">
              <a href="https://github.com/Eamin05/CloudProject.git">
                <GithubOutlined />
                Github
              </a>
            </p>
          </div>

          <div className="proj-card">
            <p className={` proj-heading`}>
              Street Light using Rotating Solar Panel
            </p>
            <p className={` proj-desc`}>
              {" "}
              Developed a street light system utilizing Arduino, a solar panel,
              servo motor, and Light Dependent Resistors (LDR). The system
              autonomously adjusts the solar panel's orientation based on
              sunlight intensity detected by the LDR, optimizing energy capture
              for powering the street lights. Arduino microcontroller
              facilitates the control logic, ensuring precise servo motor
              rotation in response to ambient light conditions.
            </p>
          </div>

          <div className="proj-card">
            <p className={`proj-heading`}>Butterfly Specimen Portal</p>
            <p className={`proj-desc`}>
              {" "}
              Developed a Python program simulating web functionality using
              NumPy, Matplotlib, Pandas, and Termcolor libraries. Project
              includes a login page for user authentication, a purchasing
              simulating interface for butterfly specimens with CSV data
              storage, and displays on butterfly species and population trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComp;
