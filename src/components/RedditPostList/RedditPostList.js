import React from 'react'
// import classes from './Counter.scss'

export const RedditPostList = (props) => (
  <div>
    <button onClick={props.fetchPosts}>Fetch</button>
  </div>
)

RedditPostList.propTypes = {
  // counter: React.PropTypes.number.isRequired,
  // doubleAsync: React.PropTypes.func.isRequired,
  // increment: React.PropTypes.func.isRequired
}

export default RedditPostList
