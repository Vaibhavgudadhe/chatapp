import React from 'react';
import classes from './Header.module.css';
import { ReactComponent as Con } from '../../svg/addContact.svg';
import { ReactComponent as Dot } from '../../svg/dot.svg';
export default function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <div className={classes.pic}>
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/302665501_1281886039277431_5189467105774242617_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVyILiwYJFsBGXLe21S2zKST4EKucQPm_kXFcotS1ZyX_g&amp;oe=63283C61"
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
