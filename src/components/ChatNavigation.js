import React from 'react';
import classes from './ChatNavigation.module.css';
import Header from './Header';
import Search from './Search';

export default function ChatNavigation() {
  return (
    <div className={classes.container}>
      <Header />
      <Search/>
    </div>
  );
}
