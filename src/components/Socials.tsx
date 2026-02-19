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
        className='socials-icon'
        target='_blank'
        href='https://www.facebook.com/felixdelafuente.dev'
        rel='noopener noreferrer'
      >
        <img src={fbIcon} alt='Facebook' />
      </a>
      <a
        className='socials-icon'
        target='_blank'
        href='https://www.instagram.com/fj.pdf/'
        rel='noopener noreferrer'
      >
        <img src={igIcon} alt='Instagram' />
      </a>
      <a
        className='socials-icon'
        target='_blank'
        href='https://twitter.com/delafuentefelix'
        rel='noopener noreferrer'
      >
        <img src={twtIcon} alt='Twitter' />
      </a>
      <a
        className='socials-icon'
        target='_blank'
        href='https://github.com/felixdelafuente'
        rel='noopener noreferrer'
      >
        <img src={ghIcon} alt='GitHub' />
      </a>
      <a
        className='socials-icon'
        target='_blank'
        href='https://www.linkedin.com/in/delafuentefelix/'
        rel='noopener noreferrer'
      >
        <img src={liIcon} alt='LinkedIn' />
      </a>
    </>
  );
}

export default Socials;
