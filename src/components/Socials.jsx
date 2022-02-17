import React from "react";
import "../stylesheets/index.scss";
import fbIcon from "../assets/fb-icon.svg";
import igIcon from "../assets/instagram-icon.svg";
import twtIcon from "../assets/twitter-icon.svg";
import ghIcon from "../assets/github-icon.svg";
import liIcon from "../assets/linkedin-icon.svg";

function Socials() {
  return (
    <>
      <a
        className="socials-icon"
        target="_blank"
        href="https://www.facebook.com/delafuentefelix"
        rel="noreferrer"
      >
        <img src={fbIcon} alt="Facebook" />
      </a>
      <a
        className="socials-icon"
        target="_blank"
        href="https://www.instagram.com/fj.delafuente/"
        rel="noreferrer"
      >
        <img src={igIcon} alt="Instagram" />
      </a>
      <a
        className="socials-icon"
        target="_blank"
        href="https://twitter.com/fj_delafuente"
        rel="noreferrer"
      >
        <img src={twtIcon} alt="Twitter" />
      </a>
      <a
        className="socials-icon"
        target="_blank"
        href="https://github.com/felixdelafuente"
        rel="noreferrer"
      >
        <img src={ghIcon} alt="GitHub" />
      </a>
      <a
        className="socials-icon"
        target="_blank"
        href="https://www.linkedin.com/in/felix-delafuente/"
        rel="noreferrer"
      >
        <img src={liIcon} alt="LinkedIn" />
      </a>
    </>
  );
}

export default Socials;