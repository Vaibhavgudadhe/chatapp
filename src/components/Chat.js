import React from 'react';
import ChatWindow from '../chatBox/ChatWindow';
import Footer from '../chatBox/Footer';
import Header from '../chatBox/Header';
import classes from './Chat.module.css';

export default function Chat() {
  return (
    <div className={classes.conatiner}>
      <Header />
      <ChatWindow />
      <Footer />
    </div>
  );
}
