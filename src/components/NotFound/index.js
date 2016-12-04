import React from 'react'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/**
 * Not found page content
 * @param {Object} JSS sheet object
 */
const NotFound = ({sheet}) => {
  const {classes} = sheet

  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.text}>
          {'The page you are looking for can\'t be found.'}
        </div>
        <h1 className={classes.title}>
          {'404'}
        </h1>
      </div>
    </div>
  )
}

NotFound.propTypes = {
  sheet: React.PropTypes.object
}

export default jssPreset(styles)(NotFound)
