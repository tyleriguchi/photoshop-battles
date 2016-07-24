import React from 'react'
import classes from './CommentItem.scss'
import unescape from 'lodash/unescape';

export const CommentItem = (props) => {
  const { comment } = props;

  return (
    <div className={classes['comment-item']}>
      <img className={classes['comment-item__img']} src={comment.image} />
      <div>
        <span dangerouslySetInnerHTML={{__html: unescape(comment.body_html)}}></span>
        <h3>{comment.author}</h3>
      </div>
    </div>
  )
}
export default CommentItem
