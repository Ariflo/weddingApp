import {
  ADD_GUEST,
  GUEST_ADDED,
  GUEST_LOGIN,
  GUEST_LOGGED_IN,
  ADD_SO,
  SO_ADDED,
  ADD_CHILD,
  CHILD_ADDED,
  REQUEST_ALL_GUESTS,
  RECIEVE_ALL_GUESTS
} from './constants';
//import { API_URL } from './config';
import Config from 'react-native-config';

function addGuest() {
  return {
    type: ADD_GUEST
  };
}

function guestAdded() {
  return {
    type: GUEST_ADDED
  };
}

export function add_guest(guest) {
  return function doPost(dispatch) {
    dispatch(addGuest());

    const url = Config.API_URL + 'guests';

    return fetch(url, {
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
        dispatch(guestAdded());
        return responseJson;
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
      });
  };
}

function add_so() {
  return {
    type: ADD_SO
  };
}

function so_added() {
  return {
    type: SO_ADDED
  };
}

export function add_significant_other(so) {
  return function doPost(dispatch) {
    dispatch(add_so());

    const url = Config.API_URL + 'significant_others';

    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(so)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(so_added());
        return responseJson;
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
      });
  };
}

function adding_child() {
  return {
    type: ADD_CHILD
  };
}

function child_added() {
  return {
    type: CHILD_ADDED
  };
}

export function add_child(child) {
  return function doPost(dispatch) {
    dispatch(adding_child());
    const url = Config.API_URL + 'kids';

    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(child)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch(child_added());
        return responseJson;
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

function requestAllGuests() {
  return {
    type: REQUEST_ALL_GUESTS
  };
}

function recieveAllGuests(data) {
  return {
    type: RECIEVE_ALL_GUESTS,
    data
  };
}

export function fetchGuests() {
  return function dofetch(dispatch) {
    dispatch(requestAllGuests());

    const url = Config.API_URL + 'guests';

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
        dispatch(recieveAllGuests(responseJson));
        return responseJson;
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
      });
  };
}
