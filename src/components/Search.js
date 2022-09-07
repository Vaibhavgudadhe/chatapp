import React from 'react';
import classes from './Search.module.css';
import { ReactComponent as Searchicon } from '../svg/search.svg';

export default function Search() {
  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <Searchicon />
        <input type="text" placeholder='save or start new chat'/>
      </div>
    </div>
  );
}
