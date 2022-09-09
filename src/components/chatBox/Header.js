import React from 'react';
import classes from './Header.module.css';
import { ReactComponent as Search } from '../../svg/search.svg';
import { ReactComponent as Dot } from '../../svg/dot.svg';
export default function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <img
          src="https://pps.whatsapp.net/v/t61.24694-24/301046630_637920364315199_7231847640338035028_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVx7ucL9W601biBocXRFzKR_Une3FEM4eEnppCZnYHiuAA&amp;oe=63264809"
          alt=""
        />
      </div>
      <div className={classes.name}>
        <span>Vaibhav</span>
      </div>
      <div className={classes.navicon}>
        <div>
          <Search />
        </div>
        <div>
          <Dot />
        </div>
      </div>
    </div>
  );
}
