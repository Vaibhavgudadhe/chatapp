import React from 'react';
import ChatMessage from './ChatMessage';
import classes from './ChatWindow.module.css';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
export default function ChatWindow(props) {

  return (
    <div className={classes.container}>
      <ChatMessage message="Hello Ayush Gupta" time="12.35 AM" />
      <ChatMessage message="Hello Ayush Gupta" time="12.35 AM" />
      <ChatMessage message="Hello Ayush Gupta" time="12.35 AM" />
      <ChatMessage message="Hello Ayush Gupta" time="12.35 AM" />
      {props.emoji && (
        <div className={classes.emoji_picker}>
          <Picker
            skinTone={SKIN_TONE_MEDIUM_DARK}
            onEmojiClick={props.onEmojiClick}
          />
        </div>
      )}
    </div>
  );
}
