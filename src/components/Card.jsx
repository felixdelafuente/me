import React from "react";
import "../stylesheets/index.scss";
import SecondaryButton from "./SecondaryButton";

function Card(props) {
  return (
    <div className="card">
      <div>
        <img className="card-image" src={props.image} alt={props.alt} />
      </div>
      <div className="card-contents">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">{props.description}</p>
        <div className="tools-img">
          <img className="tool-image" src={props.tool1} alt="" />
          <img className="tool-image" src={props.tool2} alt="" />
          <img className="tool-image" src={props.tool3} alt="" />
          <img className="tool-image" src={props.tool4} alt="" />
          <img className="tool-image" src={props.tool5} alt="" />
        </div>
        <a
          className="button-holder"
          target="_blank"
          rel="noreferrer"
          href={props.link}
        >
          <SecondaryButton label="VIEW PROJECT" />
        </a>
      </div>
    </div>
  );
}

export default Card;
