import * as actionTypes from '../constants';
import compact from 'lodash/compact';

export function checkForImage(str) {
  let group;
  if (group = /\((.*?)\)/g.exec(str)) { return group }
  if (group = /(https?\:\/\/i.imgur.com\/\w+)/.exec(str)) { return group; }
  return null;
}

export function isDirectLink(str) {
  return /(https?\:\/\/i.imgur.com\/\w+(?:[/#]|$))/.test(str);
}

export function checkImageEnding(str) {
  return /.jpg|.png/.test(str);
}

export function checkIfAlbum(str) {
  return /\/a\//.test(str);
}

export function receivedComments(postId, comments) {
  const mungedComments = comments.map( (comment) => {
    const data = comment.data;
    const body = data.body;

    // comment was deleted
    if (body === '[deleted]') { return; }

    // check to see if body contains an image
    const ImageRe = checkForImage(body);

    if (ImageRe && ImageRe[1]) {
      // currently eject if it's an album
      if (checkIfAlbum(ImageRe[1])) { return }

      let image;

      if (checkImageEnding(ImageRe[1])) {
        image = ImageRe[1];
      }
      else {
        image = `${ImageRe[1]}.jpg`;
      }

      return {
        author: data.author,
        id: data.id,
        image: image,
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
