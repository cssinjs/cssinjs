import React, {PropTypes} from 'react'
import cn from 'classnames'
import {translateZ} from 'css-functions'
import injectSheet from 'common/utils/jss'

const styles = theme => ({
  logo: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  block: {
    position: 'absolute',
    left: 0,
    top: '10%',
    right: '20%',
    bottom: '10%',
    zIndex: 1,
    border: [2, 'solid', theme.titleColorDark],
    backgroundColor: theme.color
  },
  text: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    fill: theme.titleColorDark,
    color: theme.titleColorDark,
    transform: translateZ(30)
  },
  textUnder: {
    composes: '$text',
    opacity: 0.1,
    transform: translateZ(0)
  }
})

const d = 'M50.58 57.499H40.022L25.657 82.852v6.876h16.698v8.717h8.226v-8.717h4.113v-7.244H50.58V57.499zm-8.225 24.985h-9.27l9.27-16.636v16.636zM72.433 56.885c-10.128 0-14.487 10.558-14.487 21.117 0 10.497 4.359 21.179 14.487 21.179 10.252 0 14.487-10.681 14.487-21.179 0-10.559-4.297-21.117-14.487-21.117zm0 34.991c-4.726 0-6.077-6.016-6.077-13.874 0-7.919 1.351-13.812 6.077-13.812 4.788 0 6.139 5.893 6.139 13.812 0 7.858-1.351 13.874-6.139 13.874zM115.096 82.484V57.499h-10.559L90.172 82.852v6.876h16.697v8.717h8.227v-8.717h4.112v-7.244h-4.112zm-8.227 0H97.6l9.269-16.636v16.636z'
const viewBox = '0 0 120 120'

const Logo = ({classes, className}) => (
  <div className={cn(classes.logo, className)}>
    <div className={classes.block} />
    <svg className={classes.textUnder} viewBox={viewBox}>
      <filter id="textBlur">
        <feGaussianBlur stdDeviation="1" />
      </filter>
      <path filter="url(#textBlur)" d={d} />
    </svg>
    <svg className={classes.text} viewBox={viewBox}>
      <path d={d} />
    </svg>
  </div>
)

Logo.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  className: PropTypes.string
}

Logo.defaultProps = {
  className: ''
}

export default injectSheet(styles)(Logo)
