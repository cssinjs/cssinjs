import React from 'react'
import injectSheet from 'react-jss'

import {Pencil} from '../icons'
import styles from './styles'

const EditLink = ({url, classes}) => (
  <a className={classes.editLink} href={url} target="_blank" rel="noopener noreferrer">
    <Pencil className={classes.icon} />
    <span className={classes.text}>
      Edit this page
    </span>
  </a>
)

EditLink.propTypes = {
  classes: React.PropTypes.object.isRequired,
  url: React.PropTypes.string.isRequired
}

export default injectSheet(styles)(EditLink)
