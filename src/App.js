import React, { useState } from 'react';
import './App.css';
import ChatNavigation from '../src/components/sidebar/ChatNavigation';
import Chat from './components/chatBox/Chat';
import Login from './components/Login';
function App() {
  const [user, setuser] = useState(false);
  return (
    <div className="App">
      {user ? (
        <React.Fragment>
          <ChatNavigation />
          <Chat />
        </React.Fragment>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
