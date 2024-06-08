import React from "react";
import "../stylesheets/index.scss";
import Title from "./Title.jsx";
import Tabs from "./Tabs.jsx";

function Experience() {
  return (
    <div className="experience" id="experience">
      <Title label="MY JOURNEY SO FAR" />

      <Tabs>
        <div className="tab-content" label="PwC Acceleration Center Manila">
          <h1 className="tab-position">Full Stack Developer Analyst</h1>
          <h3 className="tab-duration">July 2023 - Present</h3>
          <ul className="tab-description">
            <li>
              Develop in-house web applications for the company's local and
              international branches, addressing various business needs and
              improving employees' technology experience
            </li>
          </ul>
        </div>
        <div className="tab-content" label="Xtendly">
          <h1 className="tab-position">Full Stack Developer</h1>
          <h3 className="tab-duration">April 2022 - May 2023</h3>
          <ul className="tab-description">
            <li>
              Developed websites and web applications with complex CRUD (Create,
              Read, Update, Delete) functionalities, addressing the unique
              requirements of more than 9 diverse clients.
            </li>
            <li>
              Created reusable codes used in more than 4 projects, increasing
              development efficiency by up to 40%.
            </li>
          </ul>
        </div>
        <div className="tab-content" label="Nittiv">
          <h1 className="tab-position">Lead Product Designer</h1>
          <h3 className="tab-duration">December 2021 - December 2022</h3>
          <ul className="tab-description">
            <li>
              Lead the User Research and Created User Persona and Journey Map,
              Identifying the strengths and pain points of travelers and travel
              operators.
            </li>
            <li>
              Designed the landing page and platform's UI with technical feasibility in
              mind.
            </li>
          </ul>
        </div>
        <div className="tab-content" label="Coca-Cola Beverages Philippines">
          <h1 className="tab-position">
            Technology Intern (Conversational UX & Chatbot Development)
          </h1>
          <h3 className="tab-duration">November 2021 - March 2022</h3>
          <ul className="tab-description">
            <li>
              Planned and designed chatbot conversations and announcements for
              employee assistance engaging with 10,000+ employees with an
              average of 41 engagements per person.
            </li>
            <li>
              Redesigned the web pages of the Technology team's guide and
              documentation page, garnering a 67% increase in page visits.
            </li>
          </ul>
        </div>
        <div className="tab-content" label="Algo Filipino">
          <h1 className="tab-position">Acting Technology Director</h1>
          <h3 className="tab-duration">January 2022 - August 2022</h3>
          <ul className="tab-description">
            <li>
              Maintain the website's GitHub repository, reviewing Pull Requests
              and fixing bugs.
            </li>
          </ul>
          <h1 className="tab-position">Technology Staff</h1>
          <h3 className="tab-duration">August 2021 - January 2022</h3>
          <ul className="tab-description">
            <li>
              Developed the organization's website featuring information about
              the organization, its events, and membership application.
            </li>
          </ul>
        </div>
        <div className="tab-content" label="Impact Hub Manila">
          <h1 className="tab-position">Multimedia Design Intern (Web)</h1>
          <h3 className="tab-duration">October 2020 - June 2021</h3>
          <ul className="tab-description">
            <li>
              Designed and developed landing pages for Impact Hackathon,
              resulting in 2000+ registered participants.
            </li>
            <li>
              Created and assessed UI designs for technical feasibility,
              resulting in a 60% increase in landing page development.
            </li>
          </ul>
        </div>
      </Tabs>
    </div>
  );
}

export default Experience;
