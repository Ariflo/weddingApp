import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { ADD_GUEST, GUEST_ADDED } from './constants';

// store for data
const guests = (
  state = {
    isFetching: false,
    isReady: false,
    data: {},
  },
  action,
) => {
  switch (action.type) {
    case ADD_GUEST: {
      return {
        ...state,
        isFetching: true,
        isReady: false,
      };
    }
    case GUEST_ADDED: {
      return {
        ...state,
        isFetching: false,
        isReady: true,
        data: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  guests,
  routing: routerReducer,
});

export default rootReducer;
