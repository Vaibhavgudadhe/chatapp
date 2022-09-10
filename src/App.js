import React, { useState } from 'react';
import './App.css';
import ChatNavigation from '../src/components/sidebar/ChatNavigation';
import Chat from './components/chatBox/Chat';
import Login from './components/Login';

function App() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <div className="App">
      {user ? (
        <React.Fragment>
          <ChatNavigation user={user} />
          <Chat />
        </React.Fragment>
      ) : (
        <Login setuser={setuser} />
      )}
    </div>
  );
}

export default App;
