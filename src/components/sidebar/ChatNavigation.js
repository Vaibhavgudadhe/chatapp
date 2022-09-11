import React, { useState } from 'react';
import ChatList from './ChatList';
import classes from './ChatNavigation.module.css';
import Header from './Header';
import Search from './Search';

export default function ChatNavigation(props) {
  const [searchInput, setSearchInput] = useState('');

  const onchangeHandler = (e) => {
    setSearchInput(e.target.value);
    // console.log(searchInput);
  };

  return (
    <div className={classes.container}>
      <Header user={props.user} logoutHandler={props.logoutHandler} />
      <Search search={searchInput} onchangeHandler={onchangeHandler} />
      <div className={classes.chats}>
        <ChatList user={props.user.email} search={searchInput} />
      </div>
    </div>
  );
}
