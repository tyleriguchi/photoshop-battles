// ------------------------------------
// Action Handlers
// ------------------------------------
import * as actionTypes from '../constants/index';
import Immutable from 'immutable';

const ACTION_HANDLERS = {
  [actionTypes.RECEIVED_POSTS]: (state, action) => {
    const thing = state.set('posts', action.payload.posts);

    return thing
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  posts: [],
})
export default function counterReducer (state = initialState, action) {
  console.log('type', action.type)
  console.log('asdf', actionTypes.RECEIVED_POSTS)
  const handler = ACTION_HANDLERS[action.type]
  const thing =  handler ? handler(state, action) : state
  console.log(thing.toJS())
  return thing
}
