import Immutable from 'immutable';

export const TOGGLE_AUTHORIZED = 'TOGGLE_AUTHORIZED';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';

const defaultState = Immutable.fromJS({
  authorized: false,
  active: false,
});

// export function toggleAuthorized(bool) {
//   return (dispatch, getState) => {
//     const state = { ...getState().app, authorized: bool };
//     return dispatch({
//       type: TOGGLE_AUTHORIZED,
//       payload: state,
//     });
//   };
// }

export function toggleAuthorized(bool) {
  return (dispatch, getState) => {
    return dispatch({
      type: TOGGLE_AUTHORIZED,
      payload: bool,
    });
  };
}

// export function toggleActive(bool) {
//   return (dispatch, getState) => {
//     const state = { ...getState().app, active: bool };
//     return dispatch({
//       type: TOGGLE_ACTIVE,
//       payload: state,
//     });
//   };
// }

export function toggleActive(bool) {
  return (dispatch, getState) => {
    return dispatch({
      type: TOGGLE_ACTIVE,
      payload: bool,
    });
  };
}

export const actions = {
  toggleAuthorized,
};

const ACTION_HANDLERS = {
  [TOGGLE_AUTHORIZED]: (state, action) => state.set('authorized', action.payload),
  [TOGGLE_ACTIVE]: (state, action) => state.set('active', action.payload),
};

export default function appReducer(state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
