import React from 'react'

import injectSheet from '../../utils/jss'
import ParallaxScene from '../ParallaxScene'
import styles from './styles'

/**
 * Not found page content
 * @param {Object} JSS sheet object
 */
const NotFound = ({sheet}) => {
  const {classes} = sheet

  return (
    <div className={classes.notFound}>
      <div className={classes.inner}>
        <ParallaxScene text="404"/>
      </div>
    </div>
  )
}

NotFound.propTypes = {
  sheet: React.PropTypes.object
}

export default injectSheet(styles)(NotFound)
