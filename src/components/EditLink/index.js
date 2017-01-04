import React from 'react'
import {Pencil} from '../icons'

import injectSheet from '../../utils/jss'
import styles from './styles'

const EditLink = ({url, sheet}) => {
  const {classes} = sheet

  return (
    <a className={classes.editLink} href={url} target="_blank" rel="noopener noreferrer">
      <Pencil className={classes.icon} />
      <span className={classes.text}>
        Edit this page
      </span>
    </a>
  )
}

EditLink.propTypes = {
  sheet: React.PropTypes.object,
  url: React.PropTypes.string
}

export default injectSheet(styles)(EditLink)
