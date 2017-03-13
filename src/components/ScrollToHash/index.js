import {PureComponent, PropTypes} from 'react'
import {scroller} from 'react-scroll'

import {scrollDuration as duration} from '../../constants/animations'

const scroll = () => {
  const id = location.hash.substr(1)
  if (id) scroller.scrollTo(id, {smooth: true, duration})
}

export default class ScrollToHash extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  componentDidMount() {
    scroll()
  }

  componentDidUpdate() {
    scroll()
  }

  render() {
    return this.props.children
  }
}
