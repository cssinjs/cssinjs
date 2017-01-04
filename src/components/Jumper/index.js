import React from 'react'
import {Mouse} from '../icons'

import injectSheet from '../../utils/jss'
import styles from './styles'

const Jumper = ({sheet}) => {
  const {classes} = sheet

  return (
    <div className={classes.jumper}>
      <Mouse className={classes.icon} dotClassName={classes.iconDot} />
    </div>
  )
}

Jumper.propTypes = {
  sheet: React.PropTypes.object
}

export default injectSheet(styles)(Jumper)
