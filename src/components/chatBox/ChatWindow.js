import React from 'react';
import ChatMessage from './ChatMessage';
import classes from './ChatWindow.module.css';
export default function ChatWindow() {
  return (
    <div className={classes.container}>
      <ChatMessage message="Hello Ayush Gupta"  time="12.35 AM"/>
    </div>
  );
}
