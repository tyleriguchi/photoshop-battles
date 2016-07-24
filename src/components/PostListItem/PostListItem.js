import React from 'react'
import classes from './PostListItem.scss'
import { Link } from 'react-router';

export const PostListItem = (props) => {
  const post = props.post;

  return (
    <div className={classes['post-list']}>
      <Link to={`list/${post.id}`}>
        <img src={post.thumbnailImage} />
        <div>{post.score}</div>
        <div>{post.title}</div>
      </Link>
    </div>
  )
}
export default PostListItem
