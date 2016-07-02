import { combineReducers } from 'redux';
import * as actionTypes from '../constants/index';

const BY_ID_HANDLER = {
  [actionTypes.RECEIVED_POSTS]: (state, action) => {
    return Object.assign({},
      state,
      action.payload.posts.reduce((obj, post) => {
        obj[post.id] = post
        return obj
      }, {})
    )
  },
}

export function byId (state = {}, action) {
  const handler = BY_ID_HANDLER[action.type];

  return handler ? handler(state, action) : state;
}

const ALL_POSTS_HANDLER = {
  [actionTypes.RECEIVED_POSTS]: (state, action) => {
    return state.concat(action.payload.posts);
  },
}

export function allPosts( state = [], action) {
  const handler = ALL_POSTS_HANDLER[action.type];

  return handler ? handler(state, action) : state;
}

export default combineReducers({
  byId,
  all: allPosts,
})
