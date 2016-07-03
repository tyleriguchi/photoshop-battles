import * as actionTypes from '../constants';
import compact from 'lodash/compact';

export function receivedComments(postId, comments) {
  const mungedComments = comments.map( (comment) => {
    const data = comment.data;
    const body = data.body;
    // regex for seeing if body contains image
    const regexImage = /\((.*?)\)/g.exec(data.body);

    if (body !== '[deleted]' && regexImage && regexImage[1]) {
      return {
        author: data.author,
        id: data.id,
        image: regexImage[1],
        score: data.score,
      }
    }
  })
  return {
    type: actionTypes.RECEIVED_COMMENTS,
    payload: {
      postId,
      comments: compact(mungedComments)
    }
  }
}

export function fetchPostComments(post) {
  const { id, permalink } = post;

  if (!id) {
    throw new Error('post needs an id');
  }
  if (!permalink) {
    throw new Error('post needs a url');
  }

  return (dispatch) => {
    return fetch(permalink, {
      contentType: 'application/json'
    })
    .then( (res) => {
      return res.json()
    })
    .then( (res) => {
      console.log('res', res)
      dispatch(receivedComments(id, res[1].data.children));
    })
  }
}
