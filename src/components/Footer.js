import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "../styles/Footer.scss";
import { poppins } from "./Fonts";

const FooterComp = () => {
  return (
    <div className="footer-container">
      <footer className={`${poppins.className}`}>
        <div className="links">
          <div className="main-box">
            <div className="icon">
              <LinkedinOutlined />
            </div>
            <div className="data">
              <h5>LinkedIn</h5>
              <p>
                <a href="www.linkedin.com/in/eamin-jawed-khan">Eamin Khan</a>
              </p>
            </div>
          </div>
          <div className="main-box">
            <div className="icon">
              <GithubOutlined />
            </div>
            <div className="data">
              <h5>Github</h5>
              <p>
                <a href="https://github.com/Eamin05">Eamin Khan</a>
              </p>
            </div>
          </div>
          <div className="main-box">
            <div className="icon">
              <MailOutlined />
            </div>
            <div className="data">
              <h5>Mail</h5>
              <p>eamin.khan@mitaoe.ac.in</p>
            </div>
          </div>
        </div>
        <div className="text">
            <p>
                Made with <span>❤</span> by Eamin Khan
                <br />
                © Eamin Khan 2025 | All Rights Reserved
            </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterComp;
