/*
 * Ads from Carbon
 */

import React, {Component, findDOMNode} from 'react'
import {browserHistory} from 'react-router'
import injectSheet from 'react-jss'
import theme from '../../theme'

const styles = {
  container: {
    minHeight: 120,
    flexShrink: 0
  },
  [theme.media.sm]: {
    container: {
      display: 'none'
    }
  },
  '@global': {
    '#carbonads': {
      display: 'block',
      fontFamily: 'Verdana, "Helvetica Neue", Helvetica, sans-serif',
      lineHeight: 1.35,
      overflow: 'hidden',
      '& span': {
        display: 'block',
        position: 'relative',
        overflow: 'hidden'
      },
      '& .carbon-img': {
        float: 'left',
        marginRight: '0.5em'
      },

      '& .carbon-img img': {
        display: 'block',
        margin: 0
      },

      '& a.carbon-text': {
        display: 'block',
        float: 'left',
        marginBottom: 10,

        maxWidth: 'calc(100% - 130px - 1em)',
        textAlign: 'left',
        textDecoration: 'none',
        color: '#eee',
        cursor: 'pointer'
      },

      '& a.carbon-poweredby': {
        display: 'block',
        position: 'absolute',
        bottom: '0',
        left: 140,

        fontSize: 10,
        lineHeight: 1,
        letterSpacing: 1,
        textTransform: 'uppercase',
        cursor: 'pointer',
        color: '#eee'
      }
    }
  }
}

const injectScript = (parentNode) => {
  const script = document.createElement('script')
  script.src = '//cdn.carbonads.com/carbon.js?serve=CEBIKK3I&placement=cssinjsorg'
  script.id = '_carbonads_js'
  parentNode.innerHTML = ''
  parentNode.appendChild(script)
}

class CarbonAdsWidget extends Component {
  static propTypes = {
    classes: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.unlisten = browserHistory.listen((location) => {
      if (location.action === 'PUSH') {
        injectScript(findDOMNode(this))
      }
    })
    injectScript(findDOMNode(this))
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    const {classes} = this.props
    return <div className={classes.container} />
  }
}

export default injectSheet(styles)(CarbonAdsWidget)
