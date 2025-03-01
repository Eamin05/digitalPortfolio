import React from "react";
import "../styles/Education.scss";
import { poppins } from "./Fonts";

const EducationComp = () => {
  return (
    <div className={`education-container ${poppins.className}`}>
      <div className="ed-heading">
        <h1>Education</h1>
      </div>
      <div className="ed-timeline">
        <div className="timeline">
          <div className="timeline-container primary">
            <div className="timeline-icon">
              <i className="far fa-grin-wink"></i>
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">MIT Academy of Engineering</span>
              </h4>
              <p>
                I am currently persuing my B. Tech in Computer Science from MIT AOE, Pune, With a CGPA of 8.99 (Sem 7).
              </p>
              <p className="timeline-subtitle">2021 - 2025</p>
            </div>
          </div>
          <div className="timeline-container danger">
            <div className="timeline-icon">
              <i className="far fa-grin-hearts"></i>
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Blossom Public School</span>
              </h4>
              <p>
                I completed my 12th from Blossom Public School, Pune with 92% in PCM, CBSE board.
              </p>
              <p className="timeline-subtitle">2020 - 2021</p>
            </div>
          </div>
          <div className="timeline-container success">
            <div className="timeline-icon">
              <i className="far fa-grin-tears"></i>
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Podar International School</span>
              </h4>
              <p>
                I completed my 10th from Podar International School, Pune with 95.6%, CBSE board.
              </p>
              <p className="timeline-subtitle">2019 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationComp;
