import React from 'react';
import classes from './ChatItem.module.css';
import { ReactComponent as DoubleTick } from '../svg/doubletick.svg';

export default function ChatItem() {
  return (
    <div className={classes.conatiner}>
      <div className={classes.profileImg}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt=""
        />
      </div>
      <div className={classes.showcase}>
        <div className={classes.name_time}>
          <div className={classes.name}>
            <span>Aani</span>
          </div>
          <div className={classes.time}>12:25 AM</div>
        </div>
        <div className={classes.last_tick}>
          <div className={classes.last}>
            <div className={classes.tick}>
              <DoubleTick />
            </div>
            <span>Ha</span>
          </div>
        </div>
      </div>
    </div>
  );
}
