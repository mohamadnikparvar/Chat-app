import React from 'react';

// styles
import styles from "./Navbar.module.css"

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
              Mogram  
            </div> 
            <div className={styles.logout} onClick={logoutHandler}>
              Log out 
            </div>    
        </div>
    );
};
export default Navbar;