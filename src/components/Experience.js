import React from "react";
import "../styles/Experience.scss";
import { dancingScript, playfairDisplay, poppins } from "./Fonts";

const ExperienceComp = () => {
  return (
    <div className="exp-container">
      <div className="exp-heading">
        <h3 className={`${poppins.className}`}>Experience</h3>
      </div>
      <div className="exp-body">
        <div className={`${poppins.className} timeline`}>
          <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
            <div className="timeline__event__icon "></div>
            <div className="timeline__event__date">JUNE 2024</div>
            <div className="timeline__event__content ">
              <div className="timeline__event__title">
                Tech Mahindra (Internship)
              </div>
              <div className="timeline__event__description">
                <p>
                  <strong>Role</strong>: Frontend Development, Data and AI
                  Technologies
                  <br />
                  <strong>Tech Stack:</strong>
                  Streamlit, Langchain, Python
                  <br />
                  <strong>Description:</strong> Was involved in a POC at company
                  focusing on data and artificial intelligence (AI)
                  technologies. Learned various new technologies such as
                  Langchain, Streamlit, natural language processing (NLP), and
                  Python.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
            <div className="timeline__event__icon"></div>
            <div className="timeline__event__date">SEPT 2024</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">
                Innoplexus Consulting Services (Internship)
              </div>
              <div className="timeline__event__description">
                <p>
                  <strong>Role</strong>: Frontend Development
                  <br />
                  <strong>Tech Stack:</strong> HTML, SCSS/SASS, Javascript,
                  React JS, Next JS, Ant Design, Material UI, Redux, Thunk,
                  Axios, Gitlab, Jira, Agile Methodology
                  <br />
                  <strong>Description:</strong> Worked on multiple projects and
                  learned various new technologies such as React JS, Next JS,
                  Ant Design, Redux, Axios, etc. Developed frontend for multiple
                  clients using React JS / Next JS and Ant Design / Material UI.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
            <div className="timeline__event__icon"></div>
            <div className="timeline__event__date">APRIL 2025</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title">Enabl3 Systems Consulting Private Limited (Internship)</div>
              <div className="timeline__event__description">
                <p>
                <strong>Role</strong>: MES (Manufacturing Execution System)
                  <br />
                  <strong>Tech Stack:</strong> Rockwell
                  <br />
                  <strong>Description:</strong> Worked on multiple projects and
                  learned various new technologies such as React JS, Next JS,
                  Ant Design, Redux, Axios, etc. Developed frontend for multiple
                  clients using React JS / Next JS and Ant Design / Material UI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComp;
