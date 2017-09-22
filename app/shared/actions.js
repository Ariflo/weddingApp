import { ADD_GUEST, GUEST_ADDED } from './constants';
import { API_URL } from './config';
import Config from 'react-native-config';

function addGuest() {
  return {
    type: ADD_GUEST,
  };
}

function guestAdded(data) {
  console.log(data);
  return {
    type: GUEST_ADDED,
    data,
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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guest),
    })
      .then((response) => {
        dispatch(guestAdded(response));
      })
      .catch((error) => {
        /* eslint-disable no-console */
        console.log(error);
      });
  };
}
