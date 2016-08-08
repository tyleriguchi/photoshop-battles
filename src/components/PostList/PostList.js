import React, { PropTypes } from 'react'
import ListItem from '../PostListItem';

class RedditPostList extends React.Component {
  componentDidMount() {
    const { posts, fetchPosts } = this.props;

    if (posts.length < 1) {
      fetchPosts();
    }
  }

  render() {
    const { posts, postImageLoaded } = this.props;

    return (
      <div>
        {posts.map( (post, idx) => (
          <ListItem
            key={idx}
            post={post}
            postImageLoaded={postImageLoaded} />
        ))}
      </div>
    )
  }
}

RedditPostList.propTypes = {
  posts: PropTypes.array.isRequired,
  postImageLoaded: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
}

export default RedditPostList
