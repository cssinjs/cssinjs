/*
 * Ethical ad from CodeFund.
 */

import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import injectSheet from 'react-jss'
import theme from '../../theme'

const styles = {
  container: {
    minHeight: 150
  },
  [theme.media.sm]: {
    container: {
      display: 'none'
    }
  }
}

const injectScript = () => {
  const script = document.createElement('script')
  script.onload = () => {
    document.head.removeChild(script)
  }
  script.src = 'https://codefund.app/properties/102/funder.js?theme=dark'
  document.head.appendChild(script)
}

class CodeFundWidget extends Component {
  static propTypes = {
    classes: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.unlisten = browserHistory.listen(location => {
      if (location.action === 'PUSH') {
        injectScript()
      }
    })
    injectScript()
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    const {classes} = this.props
    return <div id="codefund" className={classes.container} />
  }
}

export default injectSheet(styles)(CodeFundWidget)
