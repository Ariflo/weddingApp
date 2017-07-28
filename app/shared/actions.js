import { REQUEST_DATA, RECIEVE_DATA } from './constants';

function requestAPOD() {
  return {
    type: REQUEST_DATA,
  };
}

function recieveAPOD(data) {
  return {
    type: RECIEVE_DATA,
    data,
  };
}

export function fetchNasaApod() {
  return function dofetch(dispatch) {
    dispatch(requestAPOD());

    const url =
      'https://api.nasa.gov/planetary/apod?api_key=oz4z48sd1PjyJC2CV522htT7lQAg7fMmCExVpgLL';

    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        dispatch(recieveAPOD(responseJson));
      })
      .catch((error) => {
        /* eslint-disable no-console */
        console.log(error);
      });
  };
}
