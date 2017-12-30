import React from 'react';
import { Scene } from 'react-native-router-flux';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Invite from './components/Invite.js';
import Guests from './components/Guests.js';
import Rsvp from './components/Rsvp.js';
import Contact from './components/Contact.js';
import Events from './components/Events.js';
import Registry from './components/Registry.js';
import Travel from './components/Travel.js';
import Pictures from './components/Pictures.js';
import Footer from './components/Footer.js';

export default () => {
  return (
    <Scene key="root" hideNavBar={true}>
      <Scene component={Login} initial  />
      <Scene key="home" component={Home} />
      <Scene key="invite" component={Invite} />
      <Scene key="guests" component={Guests} />
      <Scene key="rsvp" component={Rsvp} />
      <Scene key="contact" component={Contact} />
      <Scene key="events" component={Events} />
      <Scene key="registry" component={Registry} />
      <Scene key="travel" component={Travel} />
      <Scene key="pictures" component={Pictures} />
    </Scene>
  );
};
