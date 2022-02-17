import React from "react";
import "../stylesheets/index.scss";
import Socials from "./Socials.jsx";
import codeIcon from "../assets/code-icon.svg";
import heartIcon from "../assets/heart-icon.svg";

function Footer() {
  return (
    <footer>
      <div className="socials">
        <Socials />
      </div>
      <div className="message">
        <p className="message-text">Made by Felix with &nbsp;</p>
        <img className="message-icon" src={codeIcon} alt="Code" />
        <p className="message-text">&nbsp; and &nbsp;</p>
        <img className="message-icon" src={heartIcon} alt="Heart" />
        <p className="message-text">.</p>
        <p className="message-text">&nbsp;All rights reserved.&nbsp;</p>
      </div>
    </footer>
  );
}

export default Footer;
