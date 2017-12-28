import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  GUEST_LOGIN,
  GUEST_LOGGED_IN
} from './constants';

// store for data
const guests = (
  state = {
    isFetching: false,
    isReady: false,
    data: {}
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
        data: action.data
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
