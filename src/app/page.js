import NavbarComp from "@/components/Navbar";
import Image from "next/image";
import AboutComp from "@/components/About";
import IntroductionComp from "@/components/Introduction";
import ProjectsComp from "@/components/Projects";
import ContactComp from "@/components/ContactMe";
import "../styles/HomePage.scss";
import ExperienceComp from "@/components/Experience";
import TechStackComp from "@/components/TechStack";
import EducationComp from "@/components/Education";
import FooterComp from "@/components/Footer";

export default function Home() {
  return (
    <div className="home-pg-container">
      {/* Home Section */}
      <section id="home">
        <IntroductionComp />
      </section>

      {/* Tech STack */}
      <section id="tech-stack">
        <TechStackComp />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutComp />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <ExperienceComp />
      </section>

      {/* Education */}
      <section id="education">
        <EducationComp />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsComp />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactComp />
      </section>

      <section>
        <FooterComp />
      </section>
    </div>
  );
}
