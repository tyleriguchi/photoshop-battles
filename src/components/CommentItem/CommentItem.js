import React from 'react'
// import classes from './PostListItem.scss'

export const CommentItem = (props) => {
  const { comment } = props;

  return (
    <div>
      <img style={{maxHeight: '300px'}} src={comment.image} />
    </div>
  )
}
export default CommentItem
