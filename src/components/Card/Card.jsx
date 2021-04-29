import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button onClick={onClose} className={styles.cierre}>X</button>
      </div>
      <div className={styles.info}>
        <div className={styles.titular}>
          <Link to={`/ciudad/${id}`} >
            <h5>{name}</h5>
          </Link>
        </div>
        <div className={styles.temperaturas}>
          <div className={styles.min}>
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className={styles.icon}>
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
          </div>
          <div className={styles.max}>
            <p>Max</p>
            <p>{max}°</p>
          </div>
        </div>
      </div>
    </div>
  );
};
