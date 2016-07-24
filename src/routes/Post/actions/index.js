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
  return /\.jpg|\.png/.test(str);
}

export function checkForGifV(str) {
  return /\.gifv/.test(str);
}

export function checkIfLinkable(str) {
  return /\/a\/|gallery/.test(str);
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
      // currently eject if it's an album or a gallery
      if (checkIfLinkable(ImageRe[1])) { return }

      let image;

      if (checkImageEnding(ImageRe[1])) {
        image = ImageRe[1];
      }
      else if (checkForGifV(ImageRe[1])) {
        image = ImageRe[1].slice(0, ImageRe[1].length - 1);
      }
      else {
        image = `${ImageRe[1]}.jpg`;
      }

      return {
        author: data.author,
        id: data.id,
        image: image,
        score: data.score,
        body_html: data.body_html
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

export function fetchingComments() {
 return {
   type: actionTypes.IS_LOADING_COMMENTS
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
    dispatch(fetchingComments());

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
