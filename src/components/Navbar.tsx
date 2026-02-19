/**
 * Navigation bar component with responsive mobile menu.
 * Fixed at the top of the page with smooth scroll navigation links.
 *
 * @component
 * @description Provides navigation links to all sections of the portfolio
 * @returns {JSX.Element} The navigation bar component
 */
import { useState } from "react";
import "../stylesheets/index.scss";
import logo from "../assets/logo.png";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import TertiaryButton from "./TertiaryButton";
import PrimaryButton from "./PrimaryButton";

/**
 * Navbar component with hamburger menu for mobile.
 * Displays logo and navigation links to page sections.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navBar">
      <div className="navBar navContainer">
        <a href="#home">
          <img src={logo} className="navLogo" alt="Felix" />
        </a>
        <div className={isOpen ? "navContent contentVisible" : "navContent"}>
          <ul className="navList">
            <li className="navListItem">
              <a href="#about" className="navLink">
                ABOUT
              </a>
            </li>
            <li className="navListItem">
              <a href="#experience" className="navLink">
                EXPERIENCE
              </a>
            </li>
            <li className="navListItem">
              <a href="#services" className="navLink">
                SERVICES
              </a>
            </li>
            <li className="navListItem">
              <a href="#portfolio" className="navLink">
                PORTFOLIO
              </a>
            </li>
            <li className="navListItem navButton">
              <a
                href="https://drive.google.com/file/d/1TvaeysLFJWk0ftGh4yhbKRbCCYrCVS8x/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TertiaryButton label="VIEW RESUME" />
              </a>
            </li>
          </ul>
        </div>
        <div
          className="toggle"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
        >
          {!isOpen ? <MdOutlineMenu /> : <MdOutlineClose />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
