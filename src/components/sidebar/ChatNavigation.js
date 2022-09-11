import React from 'react';
import ChatList from './ChatList';
import classes from './ChatNavigation.module.css';
import Header from './Header';
import Search from './Search';

export default function ChatNavigation(props) {
  return (
    <div className={classes.container}>
      <Header user={props.user} logoutHandler={props.logoutHandler} />
      <Search />
      <div className={classes.chats}>
        <ChatList user={props.user.email} />
      </div>
    </div>
  );
}
