import React from 'react';
import ChatList from './ChatList';
import classes from './ChatNavigation.module.css';
import Header from './Header';
import Search from './Search';

export default function ChatNavigation() {
  return (
    <div className={classes.container}>
      <Header />
      <Search />
      <div className={classes.chats}>
        <ChatList />
      </div>
    </div>
  );
}
