import React from 'react'
// import classes from './Counter.scss'
import ListItem from '../PostListItem';

export default class RedditPostList extends React.Component {
  componentDidMount() {
    const { fetchPosts } = this.props;

    fetchPosts();
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
