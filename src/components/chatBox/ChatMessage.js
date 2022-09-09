import React from 'react';
// import { auth } from '../firebase';
import classes from './ChatMessage.module.css';
// import { ReactComponent as DoubleTick } from '../../svg/doubletick.svg';
export default function ChatMessage(props) {
  return (
    <div className={classes.chat_message}>
      <div className={classes.chat_message_text}>
        <p>{props.message}</p>
      </div>
      <div className={classes.chat_message_date}>
        <p>{props.time}</p>
      </div>
    </div>
  );
}
