import React from 'react';
import classes from './Header.module.css';
import { ReactComponent as Con } from '../../svg/addContact.svg';
import { ReactComponent as Dot } from '../../svg/dot.svg';

export default function Header(props) {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <div className={classes.pic}>
          <img src={props.user.photoURL} alt="avatar" />
        </div>
      </div>
      <div className={classes.name}>{props.user.fullname}</div>
      <div className={classes.navicon}>
        <div>
          <Con />
        </div>
        <div>
          <Dot />
        </div>
      </div>
    </div>
  );
}
