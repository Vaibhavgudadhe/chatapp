import React from 'react';
import './Login.css';
import { authentication } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = (props) => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        const newUser = {
          fullname: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        props.setuser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <img className="login-logo" src="./whatsapp-logo.png" alt="" />
        <p className="login-name">WhatsApp Web</p>
        <button className="login-btn" onClick={signInWithGoogle}>
          <img src="./google-logo.png" alt="login with google" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
