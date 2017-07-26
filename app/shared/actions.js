import request from 'reqwest';
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

export function fetchNasaApod(platform) {
  return function dofetch(dispatch) {
    dispatch(requestAPOD());

    const url = 'https://api.nasa.gov/planetary/apod?api_key=' + process.env.NASA_KEY;

    if (platform === 'web') {
      request({
        url,
        method: 'GET',
        crossOrigin: true,
        type: 'json',
      })
        .then((response) => {
          dispatch(recieveAPOD(response));
        })
        .catch((error) => {
          /* eslint-disable no-console */
          console.log(error);
        });
    } else if (platform === 'mobile') {
      fetch(url)
        .then((response) => dispatch(recieveAPOD(response)))
        .catch((error) => {
          /* eslint-disable no-console */
          console.log(error);
        });
    }
  };
}
