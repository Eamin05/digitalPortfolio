import NavbarComp from "@/components/Navbar";
import Image from "next/image";
import "../styles/HomePage.scss";
import AboutComp from "@/components/About";
import IntroductionComp from "@/components/Introduction";
import ProjectsComp from "@/components/Projects";
import ContactComp from "@/components/ContactMe";

export default function Home() {
  return (
    <div className="home-pg-container">
      {/* Navbar Component */}
      

      {/* Home Section */}
      <section id="home">
        <IntroductionComp />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutComp />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsComp />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactComp />
      </section>
    </div>
  );
}
