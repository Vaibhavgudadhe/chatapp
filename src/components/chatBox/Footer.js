import React from 'react';
import classes from './Footer.module.css';
import { ReactComponent as Smiley } from '../../svg/smiley.svg';
import { ReactComponent as Attach } from '../../svg/attach.svg';
import { ReactComponent as Send } from '../../svg/send.svg';
export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.icons}>
        <div>
          <Smiley />
        </div>
        <div>
          <Attach />
        </div>
      </div>
      <div className={classes.message}>
        <div className={classes.messagep}>
          <input type="text" placeholder="Type a message" />
        </div>
        <div className={classes.icons}>
          <Send />
        </div>
      </div>
    </div>
  );
}
