import React, {PureComponent, PropTypes} from 'react'
import Content from '../components/Content'
import {getCdnFileUrl} from '../utils/github'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function loadContent(url) {
  return fetch(url)
    .then(checkStatus)
    .then(response => response.text())
    .catch((error) => {
      // eslint-disable-next-line
      console.error(`Request failed. Something went wrong with Github API or url passed to component. ERROR: ${error}`)
    })
}

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
    const cdnUrl = getCdnFileUrl(repo, value, path)
    loadContent(cdnUrl).then((content) => {
      this.setState({cdnUrl, content, version: value})
    })
  }

  render() {
    const {content, cdnUrl} = this.state
    const {repo} = this.props

    return (
      <Content
        repo={repo}
        cdnUrl={cdnUrl}
        content={content}
        onChangeVersion={this.onChangeVersion}
      />
    )
  }
}
