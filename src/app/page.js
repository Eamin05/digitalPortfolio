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
      {/* navbar comp here */}
      <NavbarComp />
      {/* main comp here */}
      {/* <Image src={"/main.png"} height={351} width={626} alt="laptop" /> */}
      <IntroductionComp />
      {/* about me */}
      <AboutComp />
      {/* projects here */}
      <ProjectsComp />
      {/* Contact me */}
      <ContactComp />
    </div>
  );
}
