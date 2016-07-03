import { combineReducers } from 'redux';
import * as actionTypes from '../constants/index';

// const BY_ID_HANDLER = {
//   [actionTypes.RECEIVED_COMMENTS]: (state, action) => {
//     return Object.assign({},
//       state,
//       action.payload.comments.reduce((obj, comment) => {
//         obj[comment.id] = comment
//         return obj
//       }, {})
//     )
//   },
// }
//
// export function byId (state = {}, action) {
//   const handler = BY_ID_HANDLER[action.type];
//
//   return handler ? handler(state, action) : state;
// }

const ALL_COMMENTS_HANDLER = {
  [actionTypes.RECEIVED_COMMENTS]: (state, action) => {
    const obj = {};
    obj[action.payload.postId] = action.payload.comments;

    return Object.assign(
      {},
      state,
      obj
    )
  }
}

export function allComments( state = {}, action) {
  const handler = ALL_COMMENTS_HANDLER[action.type];

  return handler ? handler(state, action) : state;
}

export default combineReducers({
  all: allComments,
})
