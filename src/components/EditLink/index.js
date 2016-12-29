import React from 'react'
import Isvg from 'react-inlinesvg'

import injectSheet from '../../utils/jss'
import styles from './styles'

/**
 * Edit link
 * @param {Object} JSS sheet object
 */
const EditLink = ({url, sheet}) => {
  const {classes} = sheet

  return (
    <a className={classes.button} href={url}>
      <Isvg src={'images/edit.svg'} className={classes.icon} />
      <span className={classes.text}>
        Edit
      </span>
    </a>
  )
}

EditLink.propTypes = {
  sheet: React.PropTypes.object,
  url: React.PropTypes.string
}

export default injectSheet(styles)(EditLink)
