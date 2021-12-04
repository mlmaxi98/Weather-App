import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import About from '../components/About/About.jsx';
import Nav from '../components/Nav/Nav.jsx';
import Cards from '../components/Cards/Cards.jsx';
import styles from './App.module.scss'
import Ciudad from '../components/Ciudad/Ciudad.jsx';
import Loading from './Loading.jsx';

const App = () => {

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false)

  const onFilter = (id) => {

    const ciudad = cities.filter(city => city.id === id);

    if (ciudad.length > 0) return ciudad[0]

    else return null
  }


  const onClose = (id) => {
    setCities(oldCities => oldCities.filter(ciudad => ciudad.id !== id));
  }


  const onSearch = async (ciudad) => {

    const url = `${process.env.REACT_APP_API_KEY}&q=${ciudad}`

    try {
      setLoading(true)
      const { data } = await axios.get(url)
      const { clouds, coord, id, main, name, weather, wind } = data

      Ciudad && setCities(cities => [
        ...cities,
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

    } catch (err) {
      alert("Ciudad no encontrada", err.response)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <Route path='/' render={() => <Nav onSearch={onSearch} />} />
      <Route path='/about' component={About} />
      {
        loading
          ? <Loading />
          : <Route
            exact path='/'
            render={() => <Cards cities={cities} onClose={onClose} />} />
      }
      <Route
        exact path='/ciudad/:ciudadId'
        render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />} />
    </div>
  );
}

export default App;
