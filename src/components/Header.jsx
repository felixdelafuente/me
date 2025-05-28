import React from "react";
import "../stylesheets/index.scss";
import myImage from "../assets/felix-dela-fuente.png";
import PrimaryButton from "./PrimaryButton.jsx";
import Title from "./Title.jsx";
import Socials from "./Socials.jsx";

function Header() {
  return (
    <header className='header' id='home'>
      <div className='headerContainer'>
        <h2 className='subHeaderText'>Hi, my name is</h2>
        <Title label='FELIX DELA FUENTE' />
        <h2 className='subHeaderText'>
          I'm a Full Stack Developer integrating technology and design to create
          user-centered solutions.
        </h2>
        <div>
          <div className='header-socials'>
            <Socials />
          </div>
          <a title='hello.felixdelafuente@gmail.com' href='#form'>
            <PrimaryButton label='GET IN TOUCH' />
          </a>
        </div>
      </div>
      <div className='imageContainer'>
        <img src={myImage} className='myImage' alt='Felix Dela Fuente' />
      </div>
    </header>
  );
}

export default Header;
