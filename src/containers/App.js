import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import About from '../components/About.jsx';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import Ciudad from '../components/Ciudad.jsx';
import { CardDiv } from './StyledApp'
import axios from 'axios';
const apiKey = '9ec47a8150e44e6385aae05be36f9e11';


const App = () => {
  const [cities, setCities] = useState([]);
  const onFilter = (ciudadId) => {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) return ciudad[0]
    else return null
  }
  const onClose = (id) => {
    setCities(oldCities => oldCities.filter(ciudad => ciudad.id !== id));
  }
  const onSearch = async (ciudad) => {
    try {
      const Ciudad = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)

      const { clouds, coord, id, main, name, weather, wind } = Ciudad.data

      Ciudad && setCities(oldCities => [...oldCities,
      {
        clouds: clouds.all,
        id,
        img: weather[0].icon,
        lat: coord.lat,
        lon: coord.lon,
        max: main.temp_max,
        min: main.temp_min,
        name,
        temp: main.temp,
        wind: wind.speed,
      }
      ])

    } catch (e) { alert("Ciudad no encontrada") }
  }

  return (
    <CardDiv>
      <Route path='/' render={() => <Nav onSearch={onSearch} />} />
      <Route path='/about' component={About} />
      <Route exact path='/' render={() => <Cards cities={cities} onClose={onClose} />} />
      <Route exact path='/ciudad/:ciudadId' render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />} />
      <hr />
    </CardDiv>
  );
}

export default App;
