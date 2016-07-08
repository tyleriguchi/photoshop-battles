import React from 'react'
import classes from './PostListItem.scss'
import { Link } from 'react-router';

export const PostListItem = (props) => {
  const post = props.post;

  return (
    <div>
      <Link to={`list/${post.id}`}>
        <div>{post.score}</div>
        <div>{post.title}</div>
        <img src={post.thumbnailImage} />
      </Link>
    </div>
  )
}
export default PostListItem
