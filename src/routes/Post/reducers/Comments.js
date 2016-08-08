import { combineReducers } from 'redux';
import merge from 'lodash/merge';
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
  [actionTypes.COMMENT_IMAGE_LOADED]: (state, action) => {
    const postId = action.payload.postId

    const updatedPost = state[postId].map((comment, index) => {
        if (comment.id === action.payload.commentId) {
          // Copy the object before mutating
          return Object.assign({}, comment, {
            image: {
              ...comment.image,
              isLoading: false
            }
          })
        }
        return comment
      })
    return {
      ...state,
      [postId]: updatedPost
    }
  }
}

export function allComments( state = {}, action) {
  const handler = ALL_COMMENTS_HANDLER[action.type];

  return handler ? handler(state, action) : state;
}

const BY_ID_HANDLER = {
  [actionTypes.RECEIVED_COMMENTS]: (state, action) => {
    return Object.assign({},
      state,
      action.payload.comments.reduce( (obj, comment) => {
        obj[comment.id] = comment
        return obj
      }, {})
    )
  },
}

export function byId (state = {}, action) {
  const handler = BY_ID_HANDLER[action.type];

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
  isLoading,
  commentById: byId,
})
