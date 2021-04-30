import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import About from '../components/About/About.jsx';
import Nav from '../components/Nav/Nav.jsx';
import Cards from '../components/Cards/Cards.jsx';
import Ciudad from '../components/Ciudad/Ciudad.jsx';
import styles from './App.module.scss'
import axios from 'axios';


const App = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false)
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
      setLoading(true)
      const Ciudad = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=e5535d7731823c33bb4cf9b032f08e83&units=metric`)
      console.log(Ciudad.data)
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

      setLoading(false)
    } catch (e) {
      setLoading(false)
      setTimeout(
        () => {
          alert("Ciudad no encontrada")
        }
        , 200
      )
    }
  }
  const Loading = () => {
    return (
      <div className={styles.loading} >
        <img src='https://cdn.dribbble.com/users/547544/screenshots/2718569/loading.gif' alt='.' />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Route path='/' render={() => <Nav onSearch={onSearch} />} />
      <Route path='/about' component={About} />
      { loading ? <Loading /> : <Route exact path='/' render={() => <Cards cities={cities} onClose={onClose} />} />}
      <Route exact path='/ciudad/:ciudadId' render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />} />
    </div>
  );
}

export default App;
