import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="container">
      <Link to='/'>
        <div className="title">
          <img className="imagen" src={Logo} alt="" />
          <div className="titulo">
            <h4>Henry - Weather App</h4>
          </div>
        </div>
      </Link>
      <Link to='/about'>
        <span className="about">About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
