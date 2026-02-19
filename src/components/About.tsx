/**
 * About section component.
 * Displays personal background, experience, and career highlights.
 *
 * @component
 * @description Professional background and personal story section
 * @returns {JSX.Element} The about section component
 */
import "../stylesheets/index.scss";
import Title from "./Title";
import Paragraph from "./Paragraph";

/**
 * About component - displays professional information.
 * Contains detailed paragraphs about Felix's background and experience.
 */
function About() {
  return (
    <div className="about" id="about">
      <Title label="ABOUT ME" />
      <div className="about-content">
        <Paragraph
          label="Hi, I'm Felix Jerome P. Dela Fuente! A Software Engineer based in the Philippines with over three years of experience integrating technology and 
          design to create user-centered solutions. I am passionate about building scalable, user-centric applications that address real-world challenges,
          making technology accessible and impactful for businesses and individuals alike."
        />
        <Paragraph
          label="Currently, I am an Expert - Software Development Engineer at Globe Telecom. In this role, I develop web applications that optimize internal 
          workflows and enhance the operational efficiency of the company's systems. My work also extends to consumer-facing products used by millions of Filipinos, where I
          focus on bridging technical complexity with user-centric design to empower both employees and customers."
        />
        <Paragraph
          label="Outside of work, I am deeply involved in the tech community as a speaker and mentor. I've delivered talks on web development, cloud computing, 
          and UI/UX design at various universities, community meetups, and tech events. I also serve as a Community Lead for Angular Philippines, where I'm dedicated to
          empowering developers at every stage of their professional journey."
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
