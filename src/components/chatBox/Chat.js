import ChatWindow from '../chatBox/ChatWindow';
import Footer from '../chatBox/Footer';
import Header from '../chatBox/Header';
import classes from './Chat.module.css';
import { ReactComponent as WhatsApp } from '../../svg/whatsApp.svg';
import { useState } from 'react';

export default function Chat() {
  const ChatWindows = false;
  const [openEmoji, setEmojjiBox] = useState(false);
  const [message, setMessage] = useState('');

  const emojiHandler = () => {
    setEmojjiBox(!openEmoji);
  };
  const onEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject.emoji);
  };
  return (
    <div className={classes.conatiner}>
      {ChatWindows && (
        <div className={classes.home_bg}>
          <WhatsApp />
        </div>
      )}
      {!ChatWindows && <Header />}
      {!ChatWindows && (
        <ChatWindow emoji={openEmoji} onEmojiClick={onEmojiClick} />
      )}
      {!ChatWindows && (
        <Footer
          message={message}
          setMessage={setMessage}
          onClick={emojiHandler}
        />
      )}
    </div>
  );
}
