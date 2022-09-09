
import classes from './Footer.module.css';
import { ReactComponent as Smiley } from '../../svg/smiley.svg';
import { ReactComponent as Attach } from '../../svg/attach.svg';
import { ReactComponent as Send } from '../../svg/send.svg';

export default function Footer(props) {
  const sendMessageHandler = (e) => {
    props.setMessage(e.target.value);
  };
  const sendMessageBtn = (e) => {
    props.setMessage(e.target.value);
    console.log(props.message);
    props.setMessage('');
  };
  return (
    <div className={classes.container}>
      <div className={classes.icons}>
        <div>
          <Smiley onClick={props.onClick} />
        </div>
        <div>
          <Attach />
        </div>
      </div>
      <form className={classes.message}>
        <div className={classes.messagep}>
          <input
            type="text"
            placeholder="Type a message"
            value={props.message}
            onChange={sendMessageHandler}
          />
        </div>
        <div className={classes.icons}>
          <Send onClick={sendMessageBtn} />
        </div>
      </form>
    </div>
  );
}
