import "../stylesheets/index.scss";
import Title from "./Title";
import UIUXIcon from "../assets/ui-ux-icon.svg";
import WebDevIcon from "../assets/web-dev-icon.svg";
import MobileDevIcon from "../assets/mobile-dev-icon.svg";

function Services() {
  return (
    <div className='services' id='services'>
      <Title label='WHAT I DO' />

      <div className='services-content'>
        <div className='service'>
          <img className='service-icon' src={UIUXIcon} alt='UI & UX Design' />
          <h3 className='service-title'>UI & UX Design</h3>
          <p className='service-description'>
            I can plan and design the UI & UX of your website or application
            through research, wireframes, prototyping, testing, and mockups.
          </p>
        </div>
        <div className='service'>
          <img
            className='service-icon'
            src={WebDevIcon}
            alt='Website Development'
          />
          <h3 className='service-title'>Website</h3>
          <p className='service-description'>
            I can create marketing sites with coded or no-code tools and develop
            web applications with back-end and database integration.
          </p>
        </div>
        <div className='service'>
          <img
            className='service-icon'
            src={MobileDevIcon}
            alt='Mobile Application'
          />
          <h3 className='service-title'>Mobile Application</h3>
          <p className='service-description'>
            I can develop applications for Android and iOS, including their
            back-end and deployment to Google Play Store and Apple App Store.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
