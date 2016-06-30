import React from 'react'
// import classes from './Header.scss'

export const RedditPostListItem = (props) => {
  const post = props.post;

  return (
    <div>
      <div>{post.score}</div>
      <div>{post.title}</div>
      <img src={post.images[0].source.url} />
    </div>
  )
}
export default RedditPostListItem
