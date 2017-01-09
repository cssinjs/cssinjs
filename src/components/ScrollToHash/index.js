import {PureComponent, PropTypes} from 'react'
import {scroller} from 'react-scroll'

import {scrollDuration as duration} from '../../constants/animations'

const scroll = () => {
  const id = location.hash.substr(1)
  if (id) scroller.scrollTo(id, {smooth: true, duration})
}

export default class ScrollToHash extends PureComponent {
  static propTypes = {
    isReady: PropTypes.boolean,
    children: PropTypes.node
  }

  componentDidMount() {
    if (this.props.isReady) scroll()
  }

  componentDidUpdate() {
    if (this.props.isReady) scroll()
  }

  render() {
    return this.props.children
  }
}
