import React from 'react'
import styles from './About.module.scss'
const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>About me</h1>
            </div>
            <div className={styles.about}>

                <p>My name is Joaquín Cardozo.
                I´m passionate about programming, I am capable of providing optimal solutions and really enjoy working in a team. I am constantly learning about new technologies and always motivated to face new challenges.</p>
            </div>
        </div>
    )
}

export default About
