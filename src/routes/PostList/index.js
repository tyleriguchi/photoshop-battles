import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'list',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const RedditPostList = require('./containers/PostListContainer').default
      const reducer = require('./reducers/index').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'PostList', reducer })

      /*  Return getComponent   */
      cb(null, RedditPostList)

    /* Webpack named bundle   */
  }, 'reddit-post-list')
  }
})
