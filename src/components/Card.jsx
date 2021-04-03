import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { CardDiv } from './StyledCard'

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <CardDiv>
      <button onClick={onClose} className="cierre">X</button>
      <div className="titular">
        <Link to={`/ciudad/${id}`} >
          <h5>{name}</h5>
        </Link>
      </div>
      <div className="temperaturas">
        <div className="min">
          <p>Min</p>
          <p>{min}°</p>
        </div>
        <div className="max">
          <p>Max</p>
          <p>{max}°</p>
        </div>
        <div className="img">
          <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
        </div>
      </div>
    </CardDiv>
  );
};
