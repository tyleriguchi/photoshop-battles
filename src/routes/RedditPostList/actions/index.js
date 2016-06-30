import * as actionTypes from '../constants';
import _ from 'lodash';

export function receivedPosts(posts = []) {
  const mungedPosts = posts.map( (post) => {
    const data = post.data;

    if (data.thumbnail !== 'self') {
      return {
        title: data.title,
        images: data.preview.images,
        score: data.score,
        url: data.url,
      }
    }
    return null;
  });

  console.log('munged', mungedPosts);

  return {
    type: actionTypes.RECEIVED_POSTS,
    payload: {
      posts: _.compact(mungedPosts)
    }
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    return fetch('https://www.reddit.com/r/photoshopbattles.json', {
      contentType: 'application/json'
    })
    .then( (res) => {
      return res.json()
    })
    .then( (res) => {
      dispatch(receivedPosts(res.data.children));
    })
    .ca
  }
}
