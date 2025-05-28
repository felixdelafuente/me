import React from "react";
import "../stylesheets/index.scss";
import Title from "./Title.jsx";

function Form() {
  return (
    <div className='form' id='form'>
      <Title label="LET'S WORK TOGETHER" />
      <form
        action='https://formsubmit.co/hello.felixdelafuente@gmail.com'
        method='POST'
      >
        <div className='from-input-container'>
          <input
            id='name'
            className='input from-input'
            type='text'
            name='name'
            placeholder='Your name'
            required
          />

          <input
            className='input from-input'
            type='text'
            name='email'
            placeholder='Your email is optional'
          />
        </div>

        <textarea
          id='message'
          rows='6'
          className='input message-input'
          type='text'
          name='message'
          placeholder='Your message for me'
          required
        />
        <div className='submit-holder'>
          <input
            className='primaryButton headerButton submitButton'
            type='submit'
            value='SEND TO FELIX'
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
