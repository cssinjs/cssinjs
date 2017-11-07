import React from 'react'
import injectSheet from 'common/utils/jss'
import {Pencil} from 'common/components/icons'
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
  sheet: React.PropTypes.object.isRequired,
  url: React.PropTypes.string.isRequired
}

export default injectSheet(styles)(EditLink)
