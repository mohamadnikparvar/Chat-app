import React ,{ useContext,useEffect,useState  } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { ChatEngine } from "react-chat-engine"

// styles
import styles from "./Chats.module.css"

// components
import Navbar from './Navbar';

// context
import { AuthContext } from '../contexts/AuthContextProvider';

// api
import axios from 'axios';


const Chats = () => {

    const [loading,setLoading] = useState(true)
    const user = useContext(AuthContext)
    const history = useHistory();

    const logoutHandler = async() =>{
        await auth.signOut();
        history.push("/")
    }

    useEffect(() =>{
        if(!user) {
            history.push("/")
            return;
        }

        axios.get("https://api.chatengine.io/users/me",{
            headers:{
                "project-id" : "e497876a-687e-4a91-9c5c-f9f623fba2ac",
                "user-name" : user.email,
                "user-secret" : user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email",user.email);
            formdata.append("username",user.email);
            formdata.append("secret",user.uid);
            getFile(user.photoURL)
                .then(avatar =>{
                    formdata.append("avatar",avatar,avatar.name)
                    axios.post("https://api.chatengine.io/users/",formdata,{
                        headers:{
                            "private-key" :"9cfbe66d-9402-42d3-b33a-d943335abbae"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                })
        })

    },[user,history])

    const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob();
        return new File([data],"userPhoto.jpg",{type: "image/jpeg"})
    }

    if(!user || loading) return "LOADING..."

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler}/>
            <ChatEngine
            height="calc(100vh-50px)"
            projectID="e497876a-687e-4a91-9c5c-f9f623fba2ac"
            userName={user.email}
            userSecret={user.uid}
            />
            
        </div>
    );
};

export default Chats;