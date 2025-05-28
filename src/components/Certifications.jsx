import React, { useEffect } from "react";
import "../stylesheets/index.scss";
import Title from "./Title.jsx";
import Az900Cert from "../assets/certificate-az900.png";
import Ai900Cert from "../assets/certificate-ai900.png";
import Dp900Cert from "../assets/certificate-dp900.png";
import PmCert from "../assets/certificate-pm.png";
import ItCert from "../assets/certificate-it.png";

function Certifications() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className='certificates' id='certificates'>
      <Title label='Certifications & Achievements' />
      <div className='certificates-content'>
        <a
          href='https://learn.microsoft.com/api/credentials/share/en-us/felix-delafuente/2E1E4AE00EE30816?sharingId=C62344B160DA83F2'
          target='_blank'
          rel='noopener noreferrer'
          className='certificate-card'
        >
          <img
            src={Az900Cert}
            alt='AZ-900 Certification'
            className='certificate-image'
          />
        </a>
        <a
          href='https://learn.microsoft.com/api/credentials/share/en-us/felix-delafuente/3680B04EAE35BE56?sharingId=C62344B160DA83F2'
          target='_blank'
          rel='noopener noreferrer'
          className='certificate-card'
        >
          <img
            src={Ai900Cert}
            alt='AI-900 Certification'
            className='certificate-image'
          />
        </a>
        <a
          href='https://learn.microsoft.com/api/credentials/share/en-us/felix-delafuente/EA0F47CEF2C3CE63?sharingId=C62344B160DA83F2'
          target='_blank'
          rel='noopener noreferrer'
          className='certificate-card'
        >
          <img
            src={Dp900Cert}
            alt='DP-900 Certification'
            className='certificate-image'
          />
        </a>
        <a
          href='https://coursera.org/share/1cea0f7d0fbafcb1bd848c9882cba41e'
          target='_blank'
          rel='noopener noreferrer'
          className='certificate-card'
        >
          <img
            src={PmCert}
            alt='Project Management Certification'
            className='certificate-image'
          />
        </a>
        <a
          href='https://coursera.org/share/8ec536f5f69059c38ba0af639f70ddd3'
          target='_blank'
          rel='noopener noreferrer'
          className='certificate-card'
        >
          <img
            src={ItCert}
            alt='IT Certification'
            className='certificate-image'
          />
        </a>
      </div>
    </div>
  );
}

export default Certifications;
