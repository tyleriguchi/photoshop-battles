import React, { PropTypes } from 'react'
import classes              from './CommentItem.scss'
import unescape             from 'lodash/unescape'
import Loader               from 'components/Loader'

const CommentItem = (props) => {
  const { postId, comment, commentImageLoaded, comment: { image: { isLoading } } } = props;

  let loader, image;

  if (isLoading === true) {
    image = (
      <div>
        <img
          onLoad={() => commentImageLoaded(postId, comment.id)}
          className='hidden'
          src={comment.image.url} />
        <Loader />
      </div>
    )
  }
  else {
    image = (
      <img
        className={classes['comment-item__img']}
        src={comment.image.url} />
    )
  }

  return (
    <div className={classes['comment-item']}>
      {image}
      <div>
        <span dangerouslySetInnerHTML={{__html: unescape(comment.body_html)}}></span>
        <h3>{comment.author}</h3>
      </div>
    </div>
  )
}

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  commentImageLoaded: PropTypes.func.isRequired,
}

export default CommentItem
