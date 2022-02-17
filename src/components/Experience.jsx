import React from "react";
import "../stylesheets/index.scss";
import Title from "./Title.jsx";
import Tabs from "./Tabs.jsx";

function Experience() {
  return (
    <div className="experience" id="experience">
      <Title label="MY JOURNEY SO FAR" />

      <Tabs>
        <div className="tab-content" label="Nittiv">
          <h1 className="tab-position">Lead Product Designer</h1>
          <h3 className="tab-duration">December 2021 - Present</h3>
          <ul className="tab-description">
            <li>
              Conduct User Research and create User Persona and Journey Map,
              Identifying the strengths and pain points of travelers and travel
              operators.
            </li>
            <li>
              Design landing page and platform UI with technical feasibility in
              mind.
            </li>
          </ul>
        </div>
        <div className="tab-content" label="Coca-Cola Beverages Philippines">
          <h1 className="tab-position">
            Technology Intern (Conversational UX & Chatbot Development)
          </h1>
          <h3 className="tab-duration">November 2021 - Present</h3>
          <ul className="tab-description">
            <li>
              Research, plan, and design chatbot conversation and
              announcements for employee assistance, engaging with 9,000+
              employees with an average of 28 engagements per person.
            </li>
            <li>
              Redesign the UI of the Technology team's guide and documentation
              page, garnering a 67% increase in page visits.
            </li>
          </ul>
        </div>
        <div className="tab-content" label="Algo Filipino">
          <h1 className="tab-position">Acting Technology Director</h1>
          <h3 className="tab-duration">January 2022 - Present</h3>
          <h1 className="tab-position">Technology Staff (Web Development)</h1>
          <h3 className="tab-duration">August 2021 - January 2022</h3>
          <ul className="tab-description">
            <li>
              Develop main website featuring information about the
              organization, its events, and membership application.
            </li>
            <li>
              Coordinate with the Creatives Director for revisions and
              additions on the web design for better technical feasibility.
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
