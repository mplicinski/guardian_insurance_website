import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

const CardItemAlt = (props) => {
  return (
    <div className="card box-shadow">
      <div className="row">
        <div className="col-sm-5">
          <img className="d-block w-100 img" src={props.src} alt={props.alt} />
        </div>

        <div className="col-sm-7">
          <div className="card-block">
            <h2>{props.title}</h2>
            <h3>{props.text}</h3>
            <Link to={props.path} class="btn btn-secondary-cstm btn sm">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemAlt;
