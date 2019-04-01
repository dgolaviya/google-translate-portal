import React from 'react';
import MessageView from '../MessageView';
import Basic from '../Basic/Basic';
import Invitation from '../Invitation/Invitation';
import Reservation from '../Reservation/Reservation';
import SignInForm from '../SignInForm/SignInForm';

const ContentRouter = ({ panelName }) => {
  let component = null;
  switch (panelName) {
    case 'Messages':
      component = <MessageView />
      break;
    case 'Parts':
      component = <Basic />
      break;
    case 'Tools':
      component = <Invitation />
      break;
    case 'Data Collections':
      component = <Reservation />
      break;
    case 'Operations':
      component = <SignInForm />
      break;
    default:
      component = <MessageView />
      break;
  }
  return component;
};

export default ContentRouter;
