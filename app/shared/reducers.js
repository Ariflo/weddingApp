import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  REQUEST_DATA,
  RECIEVE_DATA,
} from './constants';

// store for data
const first_store = (
  state = {
    isFetching: false,
    isReady: false,
    data: {},
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_DATA: {
      return {
        ...state,
        isFetching: true,
        isReady: false,
      };
    }
    case RECIEVE_DATA: {
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
  first_store,
  routing: routerReducer,
});

export default rootReducer;
