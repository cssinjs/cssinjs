import React from 'react'
import Isvg from 'react-inlinesvg'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/**
 * Edit link
 * @param {Object} JSS sheet object
 */
const EditLink = ({url, sheet}) => {
  const {classes} = sheet

  return (
    <a className={classes.button} href={url}>
      <Isvg src={'static/images/edit.svg'} className={classes.icon} />
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

export default jssPreset(styles)(EditLink)
