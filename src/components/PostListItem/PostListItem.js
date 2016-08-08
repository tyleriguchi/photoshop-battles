import React    from 'react'
import classes  from './PostListItem.scss'
import { Link } from 'react-router'
import Loader   from 'components/Loader'

export const PostListItem = (props) => {
  const { post, post: { thumbnail: { isLoading } }, postImageLoaded } = props;

  const linkClassName = isLoading ? classes['loading'] : null;

  return (
    <div className={classes['post-list']}>
      <Link className={linkClassName} to={`list/${post.id}`}>
        <img
          className={isLoading ? 'hidden' : 'post-list-img'}
          onLoad={ () => postImageLoaded(post.id) }
          src={post.thumbnail.image} />
        {isLoading ? <Loader /> : null}
        <div>{post.score}</div>
        <div>{post.title}</div>
      </Link>
    </div>
  )
}
export default PostListItem
