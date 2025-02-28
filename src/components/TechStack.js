"use client";
import React from "react";
import { playfairDisplay, poppins } from "./Fonts";
import Image from "next/image";
import { Carousel } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Tech.scss";

const TechStackComp = () => {
  const techData = [
    {
      src: "/html.svg",
      alt: "HTML",
    },
    {
      src: "/css.svg",
      alt: "CSS",
    },
    {
      src: "/sass.svg",
      alt: "SASS",
    },
    {
      src: "/javascript.svg",
      alt: "Javascript",
    },
    {
      src: "/reactjs.svg",
      alt: "React",
    },
    {
      src: "/nextjs.svg",
      alt: "Next",
    },
    {
      src: "/ant-design.svg",
      alt: "Ant",
    },
    {
      src: "/aws.svg",
      alt: "AWS",
    },
    {
      src: "/github.svg",
      alt: "Github",
    },
    {
      src: "/git-lab.svg",
      alt: "Gitlab",
    },
    {
      src: "/jira.svg",
      alt: "Jira",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="tech-stack">
      <h3 className={`about-heading ${poppins.className}`}>Tech Stack</h3>
      <div className="tech-icons-container">
        <Slider {...settings} autoplaySpeed={1000} arrows={false}>
          {techData.map((tech, index) => (
            <div key={index} className="tech-icon">
              <Image src={tech.src} alt={tech.alt} width={100} height={100} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TechStackComp;
