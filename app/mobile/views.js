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
      <Scene component={Login} initial />
      <Scene
        key="footer"
        hideNavBar={true}
        tabs={true}
        tabBarComponent={Footer}
      >
        <Scene
          key="home"
          tab="home"
          icon="home"
          component={Home}
          hideNavBar={true}
        />
        <Scene
          key="invite"
          tab="invite"
          icon="ios-person-add"
          component={Invite}
          hideNavBar={true}
        />
        <Scene
          key="guests"
          tab="guests"
          icon="ios-list-box"
          component={Guests}
          hideNavBar={true}
        />
        <Scene
          key="rsvp"
          tab="rsvp"
          icon="mail"
          component={Rsvp}
          hideNavBar={true}
        />
        <Scene
          key="contact"
          tab="contact"
          icon="ios-chatbubbles"
          component={Contact}
          hideNavBar={true}
        />
        <Scene
          key="events"
          tab="events"
          icon="ios-calendar"
          component={Events}
          hideNavBar={true}
        />
        <Scene
          key="registry"
          tab="registry"
          icon="ios-cart"
          component={Registry}
          hideNavBar={true}
        />
        <Scene
          key="travel"
          tab="travel"
          icon="ios-plane"
          component={Travel}
          hideNavBar={true}
        />
        <Scene
          key="pictures"
          tab="pictures"
          icon="ios-images"
          component={Pictures}
          hideNavBar={true}
        />
      </Scene>
    </Scene>
  );
};
