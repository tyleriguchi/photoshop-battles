import React from 'react'
// import classes from './Counter.scss'
import ListItem from '../PostListItem';

export default class RedditPostList extends React.Component {
  componentDidMount() {
    const { posts, fetchPosts } = this.props;

    if (posts.length < 1) {
      fetchPosts();
    }
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.map( (post, idx) => (
          <ListItem
            key={idx}
            post={post} />
        ))}
      </div>
    )
  }
}
