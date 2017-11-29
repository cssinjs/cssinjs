import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'

function Iframe({src, classes}) {
  return <iframe src={src} className={classes.iframe} />
}

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired
}

const styles = {
  iframe: {
    width: '100%',
    height: '100%',
    minHeight: 500,
    border: 0,
    display: 'block'
  }
}

export default injectSheet(styles)(Iframe)
