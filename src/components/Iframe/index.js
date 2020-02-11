import React, {PropTypes} from 'react'
import injectSheet from 'react-jss'

function Iframe({src, classes, github}) {
  return (
    <div className={classes.wrapper}>
      {github && (
        <a href={github} className={classes.github} target="_blank">
          View on Github
        </a>
      )}
      <iframe src={src} className={classes.iframe} />
    </div>
  )
}

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  wrapper: {
    position: 'relative'
  },
  iframe: {
    width: '100%',
    height: '100vh',
    minHeight: 500,
    border: 0,
    display: 'block'
  },
  github: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 13,
    padding: '1em',
    cursor: 'pointer',
    borderRadius: '.5em',
    textDecoration: 'none',
    backgroundColor: 'white'
  }
}

export default injectSheet(styles)(Iframe)
