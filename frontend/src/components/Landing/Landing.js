import React from 'react'
import { useHistory } from "react-router-dom";
import styles from './Landing.module.css'
import img from '../../icons/pngIcons/img.png'

const Landing = () => {
    const history = useHistory();
    return (
        <div className={styles.mainContainer}>
            <section className={styles.welcomeSection}>
                <h1>Never in history <br/> has billing been this simple</h1>
                <div className={styles.textContainer}>
                    <p>MERN stack build application for <b>Rakenduste Programmeerimine</b></p>
                </div>
                <div className={styles.imageContainer}>
                    <img width="" src={img} alt="logo" />
                </div>
                <div className={styles.buttonWrapper}>
                    <button onClick={() => history.push('/login')} className={styles.startButton}>Get Started</button>
                </div>
            </section>
        </div>
    )
}

export default Landing;