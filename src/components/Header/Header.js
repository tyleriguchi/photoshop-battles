import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <Link to='/list' activeClassName={classes.activeRoute}>
      Shops
    </Link>
  </div>
)

export default Header
