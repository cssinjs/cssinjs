/*
 * Ads from Carbon
 */

import React, {Component, findDOMNode} from 'react'
import {browserHistory} from 'react-router'
import injectSheet from 'react-jss'
import theme from '../../theme'

const styles = {
  container: {
    padding: 5,
    minHeight: 100,
    '& img': {
      float: 'left',
      marginRight: 10
    },
    '& a': {
      cursor: 'pointer',
      color: '#eee'
    }
  },
  [theme.media.sm]: {
    container: {
      display: 'none'
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
