import React from 'react'
import {Motion, spring} from 'react-motion'
import {Link as ScrollLink} from 'react-scroll'

import ScrollWidget from '../ScrollWidget'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/**
 * Main presentation block for site. Here is drawed animated logo on mouse move
 */

class ParallaxScene extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      tiltx: 0,
      tilty: 0,
      degree: 0,
    }

    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove({pageX: x, pageY: y}) {
    const cx = Math.ceil(document.body.clientWidth / 2)
    const cy = Math.ceil(document.body.clientHeight / 2)
    const dx = x - cx
    const dy = y - cy

    const tiltx = dy / cy
    const tilty = -(dx / cx)
    const radius = Math.sqrt((tiltx ** 2) + (tilty ** 2))
    const degree = radius * 25

    this.setState({tiltx, tilty, degree})
  }

  render() {
    const {classes} = this.props.sheet
    const {tiltx, tilty, degree} = this.state

    return (
      <div className={classes.container}>
        <div className={classes.inner} />
        <div className={classes.ringFirst} />
        <div className={classes.ringSecond} />
        <div className={classes.ringThird} />
        <div className={classes.target}>
          <Motion
            style={{
              x: spring(tiltx),
              y: spring(tilty),
              deg: spring(degree)
            }}
          >
            {({x, y, deg}) =>
              <div
                className={classes.targetInner}
                style={{
                  WebkitTransform: `rotate3d(${x}, ${y}, 0, ${deg}deg)`,
                  transform: `rotate3d(${x}, ${y}, 0, ${deg}deg)`,
                }}
              >
                <div className={classes.logo}>
                  <div className={classes.logoBase}>
                    <div className={classes.logoTextUnder}>
                      JSS
                    </div>
                  </div>
                  <div className={classes.logoText}>
                    JSS
                  </div>
                </div>
              </div>
            }
          </Motion>
        </div>
        <div className={classes.scrollTo}>
          <ScrollLink to="mainContent" smooth duration={500}>
            <ScrollWidget />
          </ScrollLink>
        </div>
      </div>
    )
  }
}

export default jssPreset(styles)(ParallaxScene)
