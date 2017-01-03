import React, {PureComponent, PropTypes} from 'react'
import GithubWidget from '../components/GithubWidget'

import {loadStars} from '../utils/github'

export default class GithubWidgetContainer extends PureComponent {
  static propTypes = {
    repo: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    loadStars(this.props.repo).then((stars) => {
      this.setState({stars})
    })
  }

  render() {
    const {stars} = this.state
    return <GithubWidget {...this.props} stars={stars} />
  }
}
