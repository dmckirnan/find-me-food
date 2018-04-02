import Immutable from 'immutable';
import axios from 'axios';

import errors from '../lib/errors';

export const TOGGLE_AUTHORIZED = 'TOGGLE_AUTHORIZED';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const CREATE_ERROR = 'CREATE_ERROR';
export const RESET_ERROR = 'RESET_ERR0R';

const defaultState = Immutable.fromJS({
  authorized: false,
  active: false,
  error: null,
});

export function createError(err) {
  return (dispatch, getState) => {
    return dispatch({
      type: CREATE_ERROR,
      payload: err,
    });
  };
}

export function resetErrors() {
  return (dispatch) => {
    return dispatch({
      type: RESET_ERROR,
      payload: null,
    });
  };
}

export function toggleAuthorized(bool) {
  return (dispatch, getState) => {
    return dispatch({
      type: TOGGLE_AUTHORIZED,
      payload: bool,
    });
  };
}

export function toggleActive(bool) {
  return (dispatch, getState) => {
    return dispatch({
      type: TOGGLE_ACTIVE,
      payload: bool,
    });
  };
}

export function authenticateUser(username, password) {
  return (dispatch, getState) => {
    axios.post('/api/users/verify', { username, password })
      .then(res => {
        dispatch(toggleAuthorized(true));
        return dispatch(resetErrors());
      }).catch(err => dispatch(createError(errors.INVALID_LOGIN)));
  };
}

export function createUser(username, password) {
  return (dispatch, getState) => {
    axios.post('/api/users/create', { username, password })
      .then(res => {
        dispatch(toggleAuthorized(true));
        return dispatch(resetErrors());
      }).catch(err => dispatch(createError(errors.USERNAME_EXISTS)));
  };
}

export const actions = {
  toggleAuthorized,
  toggleActive,
  authenticateUser,
  createUser,
  createError,
};

const ACTION_HANDLERS = {
  [TOGGLE_AUTHORIZED]: (state, action) => state.set('authorized', action.payload),
  [TOGGLE_ACTIVE]: (state, action) => state.set('active', action.payload),
  [CREATE_ERROR]: (state, action) => state.set('error', action.payload),
  [RESET_ERROR]: (state, action) => state.set('error', action.payload),
};

export default function appReducer(state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
