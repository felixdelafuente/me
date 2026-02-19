/**
 * Hero header section component.
 * Displays the developer's name, title, social links, and call-to-action.
 *
 * @component
 * @description Main hero section with introduction and contact CTA
 * @returns {JSX.Element} The header component
 */
import "../stylesheets/index.scss";
import myImage from "../assets/felix-dela-fuente.png";
import PrimaryButton from "./PrimaryButton";
import Title from "./Title";
import Socials from "./Socials";

/**
 * Header component - the hero section of the portfolio.
 * Shows profile image, name, title, social links, and contact button.
 */
function Header() {
  return (
    <header className="header" id="home">
      <div className="headerContainer">
        <h2 className="subHeaderText">Hi, my name is</h2>
        <Title label="FELIX DELA FUENTE" />
        <h2 className="subHeaderText">
          I'm a Software Engineer integrating technology and design to create
          user-centered solutions.
        </h2>
        <div>
          <div className="header-socials">
            <Socials />
          </div>
          <a title="hello.felixdelafuente@gmail.com" href="#form">
            <PrimaryButton label="GET IN TOUCH" />
          </a>
        </div>
      </div>
      <div className="imageContainer">
        <img src={myImage} className="myImage" alt="Felix Dela Fuente" />
      </div>
    </header>
  );
}

export default Header;
