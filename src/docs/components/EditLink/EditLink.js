import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import {Pencil} from 'common/components/icons'
import {transition} from 'common/utils/styles'

const styles = theme => ({
  editLink: {
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    transition: transition(),
    color: theme.text.light,
    fill: theme.text.light,
    opacity: 0.7,
    textDecoration: 'none',
    font: {
      size: 14,
      weight: 400,
    },
    '&:hover': {
      isolate: false,
      opacity: 1,
    }
  },
  icon: {
    paddingRight: 8,
    marginTop: -1
  },
  text: {
    lineHeight: 1,
    verticalAlign: 'middle',
    textTransform: 'uppercase'
  }
})

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
