import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  GUEST_LOGIN,
  GUEST_LOGGED_IN,
  REQUEST_ALL_GUESTS,
  RECIEVE_ALL_GUESTS
} from './constants';

// store for data
const guests = (
  state = {
    isFetching: false,
    isReady: false,
    guest_party: {},
    all_guests: []
  },
  action
) => {
  switch (action.type) {
    case GUEST_LOGIN: {
      return {
        ...state,
        isFetching: true,
        isReady: false
      };
    }
    case GUEST_LOGGED_IN: {
      return {
        ...state,
        isFetching: false,
        isReady: true,
        guest_party: action.data.guest_party
      };
    }
    case REQUEST_ALL_GUESTS: {
      return {
        ...state,
        isFetching: true,
        isReady: false
      };
    }
    case RECIEVE_ALL_GUESTS: {
      return {
        ...state,
        isFetching: false,
        isReady: true,
        all_guests: action.data.all_guests
      };
    }
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  guests,
  routing: routerReducer
});

export default rootReducer;
