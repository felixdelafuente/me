import React from "react";
import "../stylesheets/index.scss";
import Title from "./Title.jsx";
import Paragraph from "./Paragraph.jsx";

function About() {
  return (
    <div className='about' id='about'>
      <Title label='ABOUT ME' />
      <div className='about-content'>
        <Paragraph
          label='Hi, my name is Felix Jerome P. Dela Fuente, a Full Stack Developer and 4th year IT undergrad from the Philippines 
          integrating technology through web development and design through UI & UX to create 
          human-centered outcomes.'
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
          label="Today, I'm currently a Full Stack Developer in a digital services company, a former
      Technology Intern at one of the biggest beverage companies in the
      Philippines, the former Lead Product Designer in an early-stage startup, the former Acting
      Technology Director at a non-profit organization, and a former Multimedia
      Design (Web) Intern at a business incubation company. I have also previously worked on several projects, 
      including web applications, marketing sites, landing pages, flutter & android applications, chatbot design, and UI & UX designs."
        />

        <Paragraph
          label="My main focus these days is learning more about full-stack development (MERN) and exploring cloud computing (Azure, AWS, Google Cloud).
        I also actively participate in tech community events to learn from different professionals
        and their experiences. Although I am currently employed, I am open for freelance services such as UI & UX design, web design, 
        mobile app development, and web development."
        />
      </div>
    </div>
  );
}

export default About;
