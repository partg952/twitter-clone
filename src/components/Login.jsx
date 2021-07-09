import React from 'react'
import './login.css';
import firebase from 'firebase';
import firebaseConfig from '../firebase';
import Twitter from '../assets/twitter.svg';
import TwitterWhite from '../assets/twitter-white.svg';
import { useHistory } from 'react-router';
export default function Login() {
   const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
   const history = useHistory(); 
   return (
        <div className='login'>
            <div id='first'>
                <img src={TwitterWhite} alt="" id='twitter-logo'/>
            </div>
            <div id='second'>
                <div>
                <img src={Twitter} alt="" />
                <h1>Happening now</h1>
                <h4>Join Twitter Today.</h4>
                <button onClick={()=>{
                    firebase.auth().signInWithPopup(GoogleAuthProvider).then((user)=>{
                        console.log(user.user)
                        history.push("/home")
                    })
                }}>Log in</button>
                </div>
            </div>
        </div>
    )
}
