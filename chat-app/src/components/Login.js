import React from 'react';
import firebase from 'firebase/app'
import { auth } from '../firebase';

// logos
import logo from "../assets/google.svg"

// styles
import styles from "./Login.module.css"

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to Mogram!</h2>
                <div 
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                className={styles.button}>
                    <img src={logo} alt="Google Logo"/>Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;