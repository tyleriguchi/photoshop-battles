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
        <img style={{maxHeight: '300px'}} src={post.images[0].source.url} />
      </Link>
    </div>
  )
}
export default PostListItem
