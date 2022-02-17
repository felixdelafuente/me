import React from "react";
import "../stylesheets/index.scss";
import Title from "./Title.jsx";
import Card from "./Card.jsx";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";
import project7 from "../assets/project-7.png";
import project8 from "../assets/project-8.png";
import project9 from "../assets/project-9.png";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import phpIcon from "../assets/php-icon.svg";
import mysqlIcon from "../assets/mysql-icon.svg";
import bootstrapIcon from "../assets/bootstrap-icon.svg";
import tailwindIcon from "../assets/tailwind-icon.svg";
import firebaseIcon from "../assets/firebase-icon.svg";
import figmaIcon from "../assets/figma-icon.svg";
import wordpressIcon from "../assets/wordpress-icon.svg";
import javaIcon from "../assets/java-icon.svg";
import uxIcon from "../assets/ux-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import jqueryIcon from "../assets/jquery-icon.svg";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <Title label="HERE ARE MY WORKS" />
      <div className="portfolio-content">
        <Card
          image={project1}
          alt="Algo Filipino Website"
          title="Algo Filipino Website"
          description="Currently work in progress, the website of
          Algo Filipino serves as the information section for all
          things about the organization."
          tool1={htmlIcon}
          tool2={cssIcon}
          tool3={tailwindIcon}
          tool4={reactIcon}
          link="https://algofilipino.com/"
        />
        <Card
          image={project2}
          alt="Naughty Kids Apparel Webiste"
          title="Naughty Kids Apparel Website"
          description="An e-commerce website that features CRUD 
          operations, as well as product ordering, archiving, and 
          complete/cancel orders."
          tool1={figmaIcon}
          tool2={htmlIcon}
          tool3={bootstrapIcon}
          tool4={phpIcon}
          tool5={mysqlIcon}
          link="https://github.com/felixdelafuente/naughtykids-clothing-website"
        />
        <Card
          image={project3}
          title="Astrokids Apparel Website"
          alt="Astrokids Apparel Website"
          description="Collaborated with a clothing line, the website 
          contains information about their products and redirection to Facebook and Shopee."
          tool1={figmaIcon}
          tool2={htmlIcon}
          tool3={bootstrapIcon}
          tool4={jsIcon}
          tool5={firebaseIcon}
          link="https://astrokids-co.web.app/"
        />
        <Card
          image={project4}
          title="Space for Ingenious Landing Page"
          alt="Space for Ingenious Landing Page"
          description="Responsive landing page containing information about the 
          event, registration, and organic SEO to increase visibility 
          in search engine results."
          tool1={wordpressIcon}
          tool2={cssIcon}
          link="https://impacthub.ph/space-for-ingenious/"
        />
        <Card
          image={project5}
          alt="Impact Hackathon Education Landing Page"
          title="Impact Hackathon Education Landing Page"
          description="User-friendly landing page containing details about the 
          hackathon, registration, contact form, and organic SEO to increase visibility 
          in search engine results."
          tool1={wordpressIcon}
          tool2={cssIcon}
          link="https://impacthub.ph/impact-hackathon-education/"
        />
        <Card
          image={project9}
          alt="Impact Pass Website"
          title="Impact Pass Website"
          description="Interactive website containing details about the 
          coworking spaces, contact form for quotations, and organic SEO to increase visibility 
          in search engine results."
          tool1={wordpressIcon}
          tool2={cssIcon}
          tool3={jqueryIcon}
          link="https://impacthub.ph/impact-pass-coworking-space/"
        />
        <Card
          image={project6}
          alt="Impact hackathon Main Landing Page"
          title="Impact Hackathon Main Landing Page"
          description="Landing page containing details about the hackathon winners and
          contact form for inquiries."
          tool1={wordpressIcon}
          tool2={cssIcon}
          link="https://impact2050.com/impacthackathon/"
        />
        <Card
          image={project7}
          alt="At Your Service Mobile App Front-end"
          title="At Your Service Mobile App Front-end"
          description="Skilled-jobs platform for Android course final project that uses layouts, UI widgets, UI 
          controls, and custom list & grid views."
          tool1={figmaIcon}
          tool2={javaIcon}
          link="https://github.com/felixdelafuente/at-your-service"
        />
        <Card
          image={project8}
          alt="MediGuide Mobile App UX Case Study"
          title="MediGuide Mobile App UX Case Study"
          description="Case Study that practices the whole UX Design Process, such as Research,
          Persona Creation, Journey Mapping, Wireframing, Prototyping, and Usability Testing."
          tool1={figmaIcon}
          tool2={uxIcon}
          link="https://www.figma.com/proto/0nhbSl6GaAjAUoOXIah7hd/UX-Uni-2021-Wireframe-%26-Prototype?page-id=138%3A1094&node-id=143%3A560&viewport=241%2C48%2C0.09&scaling=scale-down&starting-point-node-id=143%3A560"
        />
      </div>
    </div>
  );
}

export default Portfolio;
