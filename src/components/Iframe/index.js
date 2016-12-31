import React, {PropTypes} from 'react'
import injectSheet from '../../utils/jss'

function Iframe({src, sheet: {classes}}) {
  return <iframe src={src} className={classes.iframe} />
}

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  sheet: PropTypes.object.isRequired
}

const styles = {
  iframe: {
    width: '100%',
    height: '100%',
    border: 0
  }
}

export default injectSheet(styles)(Iframe)
