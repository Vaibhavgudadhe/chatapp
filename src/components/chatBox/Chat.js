
import ChatWindow from '../chatBox/ChatWindow';
import Footer from '../chatBox/Footer';
import Header from '../chatBox/Header';
import classes from './Chat.module.css';
import { ReactComponent as WhatsApp } from '../../svg/whatsApp.svg';

export default function Chat() {
  const ChatWindows = false;
  return (
    <div className={classes.conatiner}>
      {ChatWindows && (
        <div className={classes.home_bg}>
          <WhatsApp />
        </div>
      )}
      {!ChatWindows && <Header />}
      {!ChatWindows && <ChatWindow />}
      {!ChatWindows && <Footer />}
    </div>
  );
}
