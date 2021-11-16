import React from 'react';

// styles
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
              Mogram  
            </div> 
            <div className={styles.logout}>
              Log out 
            </div>    
        </div>
    );
};
export default Navbar;