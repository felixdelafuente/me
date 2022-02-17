import React from "react";
import "../stylesheets/index.scss";
import Title from "./Title.jsx";
import Paragraph from "./Paragraph.jsx";

function About() {
  return (
    <div className="about" id="about">
      <Title label="ABOUT ME" />
      <div className="about-content">
        <Paragraph
          label="Hi, my name is Felix Dela Fuente, a 3rd year IT undergrad from the Philippines 
          integrating technology through web development and design through UI & UX to create 
          human-centered outcomes."
        />
        <Paragraph
          label="I first became enthralled with development back in 2016 when I was in
      junior high when I saw a senior creating a webpage using HTML and
      CSS. After that, I volunteered to build a website using a
      no-code builder for my teacher that contains learning materials for us students. 
      That's when I decided to pursue a career in technology and take a programming specialization in my
      senior high school and IT as my bachelor's degree."
        />
        <Paragraph
          label="Today, I'm currently a
      Technology Intern at one of the biggest beverage companies in the
      Philippines, the Lead Product Designer in an early-stage startup, the Acting
      Technology Director at a non-profit organization, and a former Multimedia
      Design (Web) Intern at a business services company. I have also previously
      worked on several projects, such as event landing pages, clothing
      websites, android applications, chatbot development, and UI & UX designs."
        />

        <Paragraph
          label="My main focus these days is learning more about front-end web development, particularly React JS, as well as Flutter for an upcoming school-wide project.
        I also actively participate in tech community events to learn from different professionals
        and their experiences. I'm currently open for front-end web or mobile development
        internship roles for Spring and Summer 2022."
        />
      </div>
    </div>
  );
}

export default About;
