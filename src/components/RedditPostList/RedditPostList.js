import React from 'react'
// import classes from './Counter.scss'
import ListItem from '../RedditPostListItem';

export const RedditPostList = (props) => {
  const posts = props.posts || [];
  console.log('posts', posts)
  return (
    <div>
      <button onClick={props.fetchPosts}>Fetch</button>
      {posts.map( (post, idx) => {
        console.log('post', post)
        return(
          <ListItem key={idx}
            post={post} />
        )
      }
    )}
    </div>
  )
}

RedditPostList.propTypes = {
  // counter: React.PropTypes.number.isRequired,
  // doubleAsync: React.PropTypes.func.isRequired,
  // increment: React.PropTypes.func.isRequired
}

export default RedditPostList
