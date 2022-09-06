import React from 'react';
import classes from './Header.module.css';
import { ReactComponent as Con } from '../svg/addContact.svg';
import { ReactComponent as Dot } from '../svg/dot.svg';
export default function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <div className={classes.pic}>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt="avatar"
          />
        </div>
      </div>
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
