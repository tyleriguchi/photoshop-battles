import React from 'react'
import classes from './Loader.scss'

export const Loader = (props) => {
  return (
    <div className={classes['loading-div']}>
      <i className='fa fa-refresh fa-spin fa-4x'></i>
    </div>
  )
}
export default Loader
