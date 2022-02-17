import React from "react";
import "../stylesheets/index.scss";
import Title from "./Title.jsx";

function Form() {
  return (
    <div className="form" id="form">
      <Title label="LET'S WORK TOGETHER" />
      <form
        action="https://formsubmit.co/5736a3c2bb16e27c887662ba18913483"
        method="POST"
      >
        <div className="from-input-container">
          <input
            className="input from-input"
            type="text"
            placeholder="Your name"
          />

          <input
            className="input from-input"
            type="text"
            placeholder="Your email is optional"
          />
        </div>

        <textarea
          rows="6"
          className="input message-input"
          type="text"
          placeholder="Your message for me"
        />
        <div className="submit-holder">
          <input
            className="primaryButton headerButton submitButton"
            type="submit"
            value="SEND TO FELIX"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
