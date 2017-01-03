import React, {PureComponent, PropTypes} from 'react'
import MdContent from '../components/MdContent'

import {loadRawFile, getBlobUrl} from '../utils/github'

const loadCachedFile = (() => {
  const cache = {}
  return (...args) => {
    const key = args.join('')
    if (cache[key]) return Promise.resolve(cache[key])
    return loadRawFile(...args).then((content) => {
      cache[key] = content
      return content
    })
  }
})()

export default class MdContentContainer extends PureComponent {
  static propTypes = {
    repo: PropTypes.string,
    path: PropTypes.string,
    org: PropTypes.string,
    name: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  onChangeVersion = ({value: version}) => {
    const {repo, path, org} = this.props

    loadCachedFile(repo, path, version, org)
      .then((content) => {
        this.setState({content, version, status: 200})
      })
      .catch((err) => {
        this.setState({status: err.status, content: ''})
      })
  }

  render() {
    const {content, status} = this.state
    const {repo, org, name, path} = this.props

    return (
      <MdContent
        name={name}
        repo={repo}
        content={content}
        status={status}
        org={org}
        editUrl={getBlobUrl(repo, path, 'master', org)}
        onChangeVersion={this.onChangeVersion}
      />
    )
  }
}
