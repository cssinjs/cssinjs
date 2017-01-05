import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import {Link as ScrollLink} from 'react-scroll'

import {Logo} from '../icons'
import Jumper from '../Jumper'

import injectSheet from '../../utils/jss'
import styles from './styles'
import theme from '../../theme'

/**
 * Main presentation block for site. Here is drawed animated logo on mouse move
 */
class ParallaxScene extends Component {
  static propTypes = {
    sheet: React.PropTypes.object.isRequired
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
    const cx = Math.ceil(this.container.clientWidth / 2)
    const cy = Math.ceil(this.container.clientHeight / 2)
    const dx = x - cx
    const dy = y - cy

    const tiltX = dy / cy
    const tiltY = -(dx / cx)
    const radius = Math.sqrt((tiltX ** 2) + (tiltY ** 2))
    const deg = radius * 25

    this.setState({tiltX, tiltY, deg})
  }

  onRef = (ref) => {
    this.container = ref
  }

  render() {
    const {classes} = this.props.sheet
    const {tiltX, tiltY, deg} = this.state

    return (
      <div
        className={classes.parallaxScene}
        onMouseMove={this.onMouseMove}
        ref={this.onRef}
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
            {({x, y, deg}) => (
              <div
                className={classes.targetInner}
                style={{
                  WebkitTransform: `rotate3d(${x}, ${y}, 0, ${deg}deg)`,
                  transform: `rotate3d(${x}, ${y}, 0, ${deg}deg)`,
                }}
              >
                <div className={classes.logo}>
                  <Logo
                    className={classes.logoBase}
                    strokeColor={theme.titleColorDark}
                    backgroundColor={theme.themeColor}
                    textColor={theme.titleColorDark}
                  />
                </div>
              </div>
            )}
          </Motion>
        </div>
        <div className={classes.scrollTo}>
          <ScrollLink to="mainContent" smooth duration={500}>
            <Jumper />
          </ScrollLink>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(ParallaxScene)
