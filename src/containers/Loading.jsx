import React from 'react'
import load from '../img/loading.gif'
import styles from './App.module.scss'

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={load} alt='loading' />
        </div>
    )
}

export default Loading
