import React from "react";
import "../stylesheets/index.scss";
import Title from "./Title.jsx";
import Tabs from "./Tabs.jsx";

function Experience() {
  return (
    <div className='experience' id='experience'>
      <Title label='MY JOURNEY SO FAR' />

      <Tabs>
        <div className='tab-content' label='PwC Acceleration Center Manila'>
          <h1 className='tab-position'>
            Full Stack Developer - Senior Associate
          </h1>
          <h3 className='tab-duration'>July 2025 - Present</h3>
          <ul className='tab-description'>
            <li>
              Led the end-to-end technical architecture and implementation of
              enterprise web applications, spanning UI/UX design, backend
              services, relational database modeling, and Azure cloud
              infrastructure, to ensure scalability, maintainability, and high
              availability.
            </li>
          </ul>
          <h1 className='tab-position'>
            Full Stack Developer - Experienced Associate
          </h1>
          <h3 className='tab-duration'>July 2023 - Present</h3>
          <ul className='tab-description'>
            <li>
              Architected and delivered 5+ enterprise web applications using
              Angular and .NET, collaborating with cross-functional stakeholders
              to translate complex business requirements into scalable
              solutions.
            </li>
            <li>
              Co-led and mentored cross-functional team of 5 developers,
              managing project repositories, conducting code reviews, and
              facilitating sprint planning.
            </li>
          </ul>
        </div>
        <div className='tab-content' label='Xtendly'>
          <h1 className='tab-position'>Full Stack Developer</h1>
          <h3 className='tab-duration'>April 2022 - May 2023</h3>
          <ul className='tab-description'>
            <li>
              Delivered custom websites and web applications using React,
              Flutter, Node.js and WordPress, addressing the unique requirements
              of more than 9 diverse clients.
            </li>
            <li>
              Designed and implemented reusable component library used across 4+
              projects, reducing development time by 40% and establishing
              consistent UI/UX patterns agency-wide.
            </li>
          </ul>
        </div>
        <div className='tab-content' label='Nittiv'>
          <h1 className='tab-position'>Lead Product Designer</h1>
          <h3 className='tab-duration'>December 2021 - December 2022</h3>
          <ul className='tab-description'>
            <li>
              Led comprehensive user research initiative involving 70+ travelers
              and tourism business owners, identifying key pain points that
              directly shaped product roadmap and feature prioritization.
            </li>
            <li>
              Designed end-to-end user experience flows and interactive
              prototypes that ensures design feasibility and optimal user
              experience implementation across web and mobile platforms.
            </li>
          </ul>
        </div>
        <div className='tab-content' label='Algo Filipino'>
          <h1 className='tab-position'>Acting Technology Director</h1>
          <h3 className='tab-duration'>January 2022 - August 2022</h3>
          <ul className='tab-description'>
            <li>
              Managed volunteer development team, coordinating feature
              development and maintaining the website's GitHub repository.
            </li>
          </ul>
          <h1 className='tab-position'>Technology Staff</h1>
          <h3 className='tab-duration'>August 2021 - January 2022</h3>
          <ul className='tab-description'>
            <li>
              Built responsive organizational website using React, featuring
              information about the organization, its events, and membership
              application.
            </li>
          </ul>
        </div>
        <div className='tab-content' label='Coca-Cola Europacific Aboitiz PH'>
          <h1 className='tab-position'>
            Technology Intern (Conversational UX & Chatbot Development)
          </h1>
          <h3 className='tab-duration'>November 2021 - March 2022</h3>
          <ul className='tab-description'>
            <li>
              Developed interactive chatbot system serving 10,000+ employees
              with average of 41 interactions each, improving internal
              communication efficiency by 35%.
            </li>
            <li>
              Created automated announcement system that streamlined corporate
              communications and reduced manual distribution time by 80%.
            </li>
            <li>
              Collaborated with IT team to integrate chatbot with existing
              enterprise systems, ensuring seamless user experience and data
              consistency.
            </li>
          </ul>
        </div>
        <div className='tab-content' label='Impact Hub Manila'>
          <h1 className='tab-position'>Multimedia Design Intern (Web)</h1>
          <h3 className='tab-duration'>October 2020 - June 2021</h3>
          <ul className='tab-description'>
            <li>
              Designed and developed responsive landing pages for Impact
              Hackathon using WordPress and custom HTML,CSS, and JavaScript,
              resulting in 2,000+ participant registrations and 40% conversion
              rate.
            </li>
            <li>
              Implemented user-centered design principles that improved user
              engagement metrics by 30% compared to previous event websites.
            </li>
            <li>
              Collaborated with marketing team to ensure brand consistency and
              optimal user experience across all digital touchpoints.
            </li>
          </ul>
        </div>
      </Tabs>
    </div>
  );
}

export default Experience;
