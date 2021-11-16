import React from 'react';

// logos
import logo from "../assets/google.svg"

// styles
import styles from "./Login.module.css"

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to Mochat!</h2>
                <div className={styles.button}>
                    <img src={logo} alt="Google Logo"/>Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;