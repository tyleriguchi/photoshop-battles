// ------------------------------------
// Action Handlers
// ------------------------------------
import * as actionTypes from '../constants/index';
import Immutable from 'immutable';

const ACTION_HANDLERS = {
  [actionTypes.RECEIVED_POSTS]: (state, action) => {
    return state.set('posts', action.payload.posts);
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  posts: [],
})
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
