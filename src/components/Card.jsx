import React from "react";
import "../stylesheets/index.scss";
import SecondaryButton from "./SecondaryButton";

function Card(props) {
  return (
    <div className='card'>
      <div>
        <img className='card-image' src={props.image} alt={props.alt} />
      </div>
      <div className='card-contents'>
        <h3 className='card-title'>{props.title}</h3>
        <p className='card-description'>{props.description}</p>
        <div className='tools-img'>
          <div className='tooltip'>
            <span class='tooltiptext'>{props.tooltip1}</span>
            <img className='tool-image' src={props.tool1} alt={props.alt1} />
          </div>
          <div className='tooltip'>
            <span class='tooltiptext'>{props.tooltip2}</span>
            <img className='tool-image' src={props.tool2} alt={props.alt2} />
          </div>
          <div className='tooltip'>
            <span class='tooltiptext'>{props.tooltip3}</span>
            <img className='tool-image' src={props.tool3} alt={props.alt3} />
          </div>
          <div className='tooltip'>
            <span class='tooltiptext'>{props.tooltip4}</span>
            <img className='tool-image' src={props.tool4} alt={props.alt4} />
          </div>
          <div className='tooltip'>
            <span class='tooltiptext'>{props.tooltip5}</span>
            <img className='tool-image' src={props.tool5} alt={props.alt5} />
          </div>
        </div>
        <a
          className='button-holder'
          target='_blank'
          rel='noreferrer'
          href={props.link}
        >
          <SecondaryButton label='VIEW PROJECT' />
        </a>
      </div>
    </div>
  );
}

export default Card;
