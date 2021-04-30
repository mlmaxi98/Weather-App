import React from "react";
import { Redirect } from 'react-router-dom'
import styles from './Ciudad.module.scss'
export default function Ciudad({ city }) {
    if (!city) {
        return <Redirect to="/"></Redirect>
    }
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.title}>
                    <h2>{city.name}</h2>
                </div>
                <div className={styles.details}>
                    <ul className={styles.more}>
                        <li>Temperature: {city.temp || ` - `} ºC</li>
                        <li>Max: {city.max || ` - `} ºC</li>
                        <li>Min: {city.min || ` - `} ºC</li>
                        <li>Wind: {city.wind || ` - `} km/h</li>
                        <li>Amount of clouds: {city.clouds || ` - `}</li>
                        <li>Latitude: {city.lat || ` - `}º</li>
                        <li>Length: {city.lon || ` - `}º</li>
                    </ul>
                    <div className={styles.icon}>
                        <img
                            src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt=""
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}