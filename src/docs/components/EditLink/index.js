import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import {Pencil} from 'common/components/icons'
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
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired
}

export default injectSheet(styles)(EditLink)
