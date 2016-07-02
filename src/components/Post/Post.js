import React from 'react'
// import classes from './Counter.scss'
import ListItem from '../PostListItem';

export const RedditPostList = (props) => {
  console.log(props)
  return (
    <div>
      {props.id}
    </div>
  )
}

RedditPostList.propTypes = {
  // counter: React.PropTypes.number.isRequired,
  // doubleAsync: React.PropTypes.func.isRequired,
  // increment: React.PropTypes.func.isRequired
}

export default RedditPostList
