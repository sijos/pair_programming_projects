import merge from 'lodash/merge';
import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions';

const errorsReducer = function (state = [], action) {
  // let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
    // case RECEIVE_ERRORS:
    //   newState.errors = action.errors;
    //   return newState;
    // case CLEAR_ERRORS:
    //   newState.errors = [];
    //   return newState;
  }
};

export default errorsReducer;
