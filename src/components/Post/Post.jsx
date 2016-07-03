import React from 'react'
// import classes from './Counter.scss'
import ListItem from '../PostListItem';

class Post extends React.Component {
  static propTypes = {
    // history: PropTypes.object.isRequired,
    // routes: PropTypes.object.isRequired,
    // routerKey: PropTypes.number,
    // store: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        {this.props.id['title']}
      </div>
    )
  }
}

export default Post
