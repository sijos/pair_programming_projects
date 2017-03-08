// import thunk actions from todo_api_utils
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// export actions based on thunk actions
export const receiveErrors = function(errors) {
  return { type: RECEIVE_ERRORS, errors };
};
