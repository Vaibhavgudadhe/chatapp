import React, { useState } from 'react';
import './App.css';
import ChatNavigation from '../src/components/sidebar/ChatNavigation';
import Chat from './components/chatBox/Chat';
import Login from './components/Login';
import { authentication } from './firebase';

function App() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')));

  const logoutHandler = () => {
    authentication
      .signOut()
      .then(() => {
        setuser(null);
        localStorage.removeItem('user');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      {user ? (
        <React.Fragment>
          <ChatNavigation user={user} logoutHandler={logoutHandler} />
          <Chat />
        </React.Fragment>
      ) : (
        <Login setuser={setuser} />
      )}
    </div>
  );
}

export default App;
