import Immutable from 'immutable';
import axios from 'axios';

export const TOGGLE_AUTHORIZED = 'TOGGLE_AUTHORIZED';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';

const defaultState = Immutable.fromJS({
  authorized: false,
  active: false,
});

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
      .then(res => dispatch(toggleAuthorized(true)))
      .catch(err => {
        console.log('Authentication failed: ', err);
        return dispatch(toggleAuthorized(false));
      });
  };
}

export const actions = {
  toggleAuthorized,
  toggleActive,
  authenticateUser,
};

const ACTION_HANDLERS = {
  [TOGGLE_AUTHORIZED]: (state, action) => state.set('authorized', action.payload),
  [TOGGLE_ACTIVE]: (state, action) => state.set('active', action.payload),
};

export default function appReducer(state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
