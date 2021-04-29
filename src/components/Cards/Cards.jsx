import React from 'react';
import styles from './Cards.module.scss';
import Card from '../Card/Card';

export default function Cards({ cities, onClose }) {
  return (
    <div className={styles.container}>
      {cities.length > 0 ? cities.map(c =>
        <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          onClose={() => onClose(c.id)}
        />)
        :
        <div className={styles.title}>
          <span>Search a city!</span>
        </div>
      }
    </div>
  );
}
