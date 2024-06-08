import React, { useState } from "react";
import "../stylesheets/index.scss";
import logo from "../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import TertiaryButton from "./TertiaryButton.jsx";

function Navbar() {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <nav className="navBar">
      <div className="navBar navContainer">
        <a href="#home">
          <img src={logo} className="navLogo" alt="Felix" />
        </a>
        <div className={click ? "navContent contentVisible" : "navContent"}>
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
                href="https://drive.google.com/file/d/1G1_5SHtpYGGv1tijSjfnspl5NYLvz-no/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <TertiaryButton label="VIEW RESUME" />
              </a>
            </li>
          </ul>
        </div>
        <div className="toggle">
          {!click ? (
            <MdOutlineMenu onClick={clickHandler} />
          ) : (
            <MdOutlineClose onClick={clickHandler} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
