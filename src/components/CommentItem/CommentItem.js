import React, { PropTypes } from 'react'
import classes from './CommentItem.scss'
import unescape from 'lodash/unescape';

const CommentItem = (props) => {
  const { postId, comment, commentImageLoaded, comment: { image: { isLoading } } } = props;

  let loader, imageClassName;

  if (isLoading === true) {
    imageClassName = 'hidden';
    loader = (
      <div className='loading-div'>
        <i className='fa fa-refresh fa-spin fa-4x'></i>
      </div>
    )

    return (
      <div className={classes['comment-item']}>
        <img
          onLoad={() => commentImageLoaded(postId, comment.id)}
          className={imageClassName}
          src={comment.image.url} />
        {loader}
        <div>
          <span dangerouslySetInnerHTML={{__html: unescape(comment.body_html)}}></span>
          <h3>{comment.author}</h3>
        </div>
      </div>
    )
  }
  else {
    imageClassName = classes['comment-item__img'];

    return (
      <div className={classes['comment-item']}>
        <img
          onLoad={() => commentImageLoaded(comment.id)}
          className={classes['comment-item__img']}
          src={comment.image.url} />
        <div>
          <span dangerouslySetInnerHTML={{__html: unescape(comment.body_html)}}></span>
          <h3>{comment.author}</h3>
        </div>
      </div>
    )
  }
}

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  commentImageLoaded: PropTypes.func.isRequired,
}

export default CommentItem
