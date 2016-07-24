import { combineReducers } from 'redux';
import * as actionTypes from '../constants/index';

const ALL_COMMENTS_HANDLER = {
  [actionTypes.RECEIVED_COMMENTS]: (state, action) => {
    const obj = {};
    obj[action.payload.postId] = action.payload.comments;

    return Object.assign(
      {},
      state,
      obj
    )
  },
}

export function allComments( state = {}, action) {
  const handler = ALL_COMMENTS_HANDLER[action.type];

  return handler ? handler(state, action) : state;
}

const IS_LOADING_HANDLER = {
  [actionTypes.RECEIVED_COMMENTS]: (state, action) => {
    return {
      isLoading: false
    }
  },

  [actionTypes.IS_LOADING_COMMENTS]: (state, action) => {
    return {
      isLoading: true
    }
  }
}

const isLoadingState = {
  isLoading: false
}

export function isLoading( state = {}, action) {
  const handler = IS_LOADING_HANDLER[action.type];

  return handler ? handler(state, action) : isLoadingState;
}

export default combineReducers({
  all: allComments,
  isLoading: isLoading
})
