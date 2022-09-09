import ChatNavigation from '../src/components/sidebar/ChatNavigation';
import './App.css';
import Chat from './components/chatBox/Chat';
function App() {
  return (
    <div className="App">
      <ChatNavigation />
      <Chat />
    </div>
  );
}

export default App;
