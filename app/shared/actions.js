import {
  ADD_GUEST,
  GUEST_ADDED,
  GUEST_LOGIN,
  GUEST_LOGGED_IN
} from './constants';
//import { API_URL } from './config';
import Config from 'react-native-config';

function addGuest() {
  return {
    type: ADD_GUEST
  };
}

function guestAdded(data) {
  return {
    type: GUEST_ADDED,
  };
}

export function add_guest(guest) {
  return function dofetch(dispatch) {
    dispatch(addGuest());

    const url = Config.API_URL + 'guests';

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guest)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(guestAdded(responseJson));
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
      });
  };
}

function loginGuest() {
  return {
    type: GUEST_LOGIN
  };
}

function guestLoggedIn(data) {
  return {
    type: GUEST_LOGGED_IN,
    data
  };
}

export function login_guest(code) {
  return function dofetch(dispatch) {
    dispatch(loginGuest());

    const url = Config.API_URL + 'guests/' + code;

    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(guestLoggedIn(responseJson));
        return responseJson;
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
      });
  };
}
