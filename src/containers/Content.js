import React, {PureComponent, PropTypes} from 'react'
import Content from '../components/Content'

import {loadRawFile} from '../utils/github'

export default class ContentContainer extends PureComponent {
  static propTypes = {
    repo: PropTypes.string,
    path: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  onChangeVersion = ({value}) => {
    const {repo, path} = this.props
    loadRawFile(repo, path, value)
      .then((content) => {
        this.setState({content, version: value, status: 200})
      })
      .catch((err) => {
        this.setState({status: err.status, content: ''})
      })
  }

  render() {
    const {content, status} = this.state
    const {repo} = this.props

    return (
      <Content
        repo={repo}
        content={content}
        status={status}
        onChangeVersion={this.onChangeVersion}
      />
    )
  }
}
