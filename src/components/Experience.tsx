/**
 * Experience section component.
 * Displays professional work history using an interactive tabbed interface.
 *
 * @component
 * @description Work experience timeline with company tabs
 * @returns {JSX.Element} The experience section component
 */
import "../stylesheets/index.scss";
import Title from "./Title";
import Tabs from "./Tabs";
import { ReactElement } from "react";

interface TabChildProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Experience component - displays professional work history.
 * Uses tabs to switch between different companies/positions.
 */
function Experience() {
  const tabs: ReactElement<TabChildProps>[] = [
    <div className="tab-content" key="globe" data-label="Globe Telecom">
      <h1 className="tab-position">Expert - Software Development Engineer</h1>
      <h3 className="tab-duration">February 2026 - Present</h3>
      <ul className="tab-description">
        <li>
          Develop features and resolve defects across distributed microservices
          using the MERN stack, leveraging Podman and Docker for local
          containerization to ensure environment consistency and streamlined
          development cycles.
        </li>
      </ul>
    </div>,
    <div
      className="tab-content"
      key="pwc"
      data-label="PwC Acceleration Center Manila"
    >
      <h1 className="tab-position">Full Stack Developer - Senior Associate</h1>
      <h3 className="tab-duration">July 2025 - January 2026</h3>
      <ul className="tab-description">
        <li>
          Lead technical architecture and delivery of web applications, from UI
          design to database schemas, project setup using Clean architecture,
          and Azure cloud infrastructure to ensure scalable solutions.
        </li>
        <li>
          Translate complex business requirements into technical specs and
          implementation plans in collaboration with PMs and stakeholders,
          reducing rework during development cycles.
        </li>
        <li>
          Mentor and review code of associates in Azure DevOps, maintaining PR
          quality and deploy to Azure App Service.
        </li>
      </ul>
      <h1 className="tab-position">
        Full Stack Developer - Experienced Associate
      </h1>
      <h3 className="tab-duration">July 2023 - July 2025</h3>
      <ul className="tab-description">
        <li>
          Architected and shipped 5+ production web applications (Angular, .NET,
          Azure) that automated manual workflows and improved operational
          efficiency across departments.
        </li>
        <li>
          Led a cross-functional team of 5 developers, facilitating bi-weekly
          sprint planning, and managing inter-team communication with project
          stakeholders.
        </li>
      </ul>
    </div>,
    <div className="tab-content" key="xtendly" data-label="Xtendly">
      <h1 className="tab-position">Full Stack Developer</h1>
      <h3 className="tab-duration">April 2022 - May 2023</h3>
      <ul className="tab-description">
        <li>
          Delivered 9+ web applications, mobile apps, and landing pages for
          diverse clients across e-commerce, energy, and hospitality sectors,
          managing projects from requirements gathering through deployment using
          Google Cloud Platform.
        </li>
        <li>
          Created reusable components used across 4+ projects, improving code
          efficiency and consistency by up to 40%.
        </li>
      </ul>
    </div>,
    <div className="tab-content" key="nittiv" data-label="Nittiv">
      <h1 className="tab-position">Lead Product Designer</h1>
      <h3 className="tab-duration">December 2021 - December 2022</h3>
      <ul className="tab-description">
        <li>
          LLed user research for a travel-tech startup (70+ interviews/surveys)
          to validate product hypotheses and define feature priorities for a
          travel-tech MVP.
        </li>
        <li>
          Produced user flows, wireframes, and high-fidelity prototypes that
          informed product scope and UI requirements, ensuring design decisions
          mapped to measurable business needs.
        </li>
      </ul>
    </div>,
    <div className="tab-content" key="algofilipino" data-label="Algo Filipino">
      <h1 className="tab-position">Acting Technology Director</h1>
      <h3 className="tab-duration">January 2022 - August 2022</h3>
      <ul className="tab-description">
        <li>
          Managed volunteer development team, coordinating feature development
          and maintaining the website's GitHub repository.
        </li>
      </ul>
      <h1 className="tab-position">Technology Staff</h1>
      <h3 className="tab-duration">August 2021 - January 2022</h3>
      <ul className="tab-description">
        <li>
          Built responsive organizational website using React, featuring
          information about the organization, its events, and membership
          application.
        </li>
      </ul>
    </div>,
    <div
      className="tab-content"
      key="coke"
      data-label="Coca-Cola Europacific Aboitiz PH"
    >
      <h1 className="tab-position">
        Technology Intern (Conversational UX & Chatbot Development)
      </h1>
      <h3 className="tab-duration">November 2021 - March 2022</h3>
      <ul className="tab-description">
        <li>
          Developed interactive chatbot system serving 10,000+ employees with
          average of 41 interactions each, improving internal communication
          efficiency by 35%.
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
    </div>,
    <div className="tab-content" key="impact" data-label="Impact Hub Manila">
      <h1 className="tab-position">Multimedia Design Intern (Web)</h1>
      <h3 className="tab-duration">October 2020 - June 2021</h3>
      <ul className="tab-description">
        <li>
          Designed and developed responsive landing pages for Impact Hackathon
          using WordPress and custom HTML,CSS, and JavaScript, resulting in
          2,000+ participant registrations and 40% conversion rate.
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
    </div>,
  ];

  return (
    <div className="experience" id="experience">
      <Title label="MY JOURNEY SO FAR" />
      <Tabs>{tabs}</Tabs>
    </div>
  );
}

export default Experience;
