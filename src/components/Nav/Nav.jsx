import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar';
import styles from './Nav.module.scss';

function Nav({ onSearch }) {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link to='/' className={styles.title}>
          <span>Weather App</span>
        </Link>
        <Link to='/' className={styles.title}>
          <span>Home</span>
        </Link>
        <Link to='/about' className={styles.title}>
          <span>About</span>
        </Link>
        <SearchBar
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default Nav;
