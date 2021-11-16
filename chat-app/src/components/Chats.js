import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { ChatEngine } from "react-chat-engine"

// styles
import styles from "./Chats.module.css"

// components
import Navbar from './Navbar';

const Chats = () => {

    const history = useHistory();

    const logoutHandler = async() =>{
        await auth.signOut();
        history.push("/")
    }

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler}/>
            <ChatEngine
            height="calc(100vh-50px)"
            projectID="e497876a-687e-4a91-9c5c-f9f623fba2ac"
            userName="."
            userSecret="."
            />
            
        </div>
    );
};

export default Chats;