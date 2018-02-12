import React, {Component, PropTypes} from 'react'
import {Motion, spring} from 'react-motion'

import {NotFound as NotFoundIcon} from '../icons'

import injectSheet from 'react-jss'
import styles from './styles'

/**
 * Main presentation block for site. Here is drawed animated logo on mouse move
 */
class NotFound extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      tiltX: 0,
      tiltY: 0,
      deg: 0
    }
  }

  onMouseMove = ({pageX: x, pageY: y}) => {
    const cx = Math.ceil(window.innerWidth / 2)
    const cy = Math.ceil(window.innerHeight / 2)
    const dx = x - cx
    const dy = y - cy
    const tiltX = dy / cy
    const tiltY = -(dx / cx)
    const radius = Math.sqrt((tiltX ** 2) + (tiltY ** 2))
    const deg = radius * 25

    this.setState({tiltX, tiltY, deg})
  }

  render() {
    const {classes} = this.props
    const {tiltX, tiltY, deg} = this.state

    return (
      <div
        className={classes.notFound}
        onMouseMove={this.onMouseMove}
      >
        <div className={classes.inner} />
        <div className={classes.ringFirst} />
        <div className={classes.ringSecond} />
        <div className={classes.ringThird} />
        <div className={classes.target}>
          <Motion
            style={{
              x: spring(tiltX),
              y: spring(tiltY),
              deg: spring(deg)
            }}
          >
            {({x, y, deg: nextDeg}) => (
              <div
                className={classes.targetInner}
                style={{
                  WebkitTransform: `rotate3d(${x}, ${y}, 0, ${nextDeg}deg)`,
                  transform: `rotate3d(${x}, ${y}, 0, ${nextDeg}deg)`,
                }}
              >
                <div className={classes.logo}>
                  <NotFoundIcon className={classes.logoBase} />
                </div>
              </div>
            )}
          </Motion>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(NotFound)
