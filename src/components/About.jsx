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
          label="Hi, I'm Felix Jerome P. Dela Fuente! A Full Stack Developer based in the Philippines with over three years of experience integrating technology and 
          design to create user-centered solutions. I am passionate about building scalable, user-centric applications that address real-world challenges,
          making technology accessible and impactful for businesses and individuals alike."
        />
        <Paragraph
          label='Currently, I am a Full Stack Developer Analyst at PwC Acceleration Center Manila, where I lead the technical architecture and implementation, 
          from UI design to database schema and cloud infrastructure, to develop web applications that streamline workflows and enhance operational efficiency.
          My work focuses on bridging technical complexity with user-focused solutions, ensuring that the applications I build empower the employees in the firm.'
        />
        <Paragraph
          label="Outside of work, I am deeply involved in the tech community as a speaker and mentor. I've delivered talks on web development, Azure fundamentals,
          and UI/UX design at various universities and community events. I'm also one of the community leads of Angular Philippines, a tech community dedicated to empowering
          developers at all stages of their professional journey."
        />
        <Paragraph
          label="While I'm fully committed to my current role, I remain open to exploring compelling opportunities both locally and internationally,
          particularly those that align with my career goals."
        />
      </div>
    </div>
  );
}

export default About;
