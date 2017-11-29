import React, {PropTypes} from 'react'
import {animateScroll as scroller} from 'react-scroll'
import injectSheet from 'common/utils/jss'
import {scrollDuration as duration} from 'common/constants/animations'

const styles = {
  scroll: {
    display: 'inline-block',
    verticalAlign: 'middle',
    boxShadow: 'none',
    appearance: 'none',
    border: 'none',
    outline: 'none',
    padding: 0,
    margin: 0,
    background: 'transparent',
    cursor: 'pointer',
    color: 'currentColor',
    fill: 'currentColor'
  }
}

const scroll = () => scroller.scrollTo(window.outerHeight, {smooth: true, duration})

/**
 * Scroll down by screen size
 */
const ScrollDown = ({classes, children}) => (
  <button
    className={classes.scroll}
    onClick={() => scroll()}
  >
    {children}
  </button>
)

ScrollDown.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired
}

export default injectSheet(styles)(ScrollDown)
