import * as actionTypes from '../constants';
import compact from 'lodash/compact';

const formatPermaLink = (permalink) => {
  const permalinkWithJson = `${permalink.substr(0, permalink.length - 1)}.json`;

  return `https:/www.reddit.com${permalinkWithJson}`;
}

export function receivedPosts(posts = []) {
  const mungedPosts = posts.map( (post) => {
    const data = post.data;

    if (data.thumbnail !== 'self' && data.hasOwnProperty('preview')) {
      return {
        id: data.id,
        title: data.title,
        images: data.preview.images,
        permalink: formatPermaLink(data.permalink),
        score: data.score,
      }
    }
    return null;
  });

  return {
    type: actionTypes.RECEIVED_POSTS,
    payload: {
      posts: compact(mungedPosts)
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
  }
}
