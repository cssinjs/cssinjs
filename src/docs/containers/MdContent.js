import React, {PureComponent, PropTypes} from 'react'
import {loadRawFile, getBlobUrl, org as organization} from 'common/utils/github'
import MdContent from '../components/MdContent'

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
    query: PropTypes.object.isRequired,
    repo: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    org: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChangeVersion: PropTypes.func.isRequired
  }

  static defaultProps = {
    org: organization
  }

  constructor(props) {
    super(props)
    this.state = {
      version: props.query.v,
      status: 200
    }
  }

  onChangeVersion = (param) => {
    this.load(param)
    this.props.onChangeVersion(param)
  }

  load({value: version}) {
    const {repo, path, org} = this.props
    loadCachedFile(repo, path, version, org)
      .then((content) => {
        this.setState({status: 200, content, version})
      })
      .catch((err) => {
        this.setState({status: err.status, content: ''})
      })
  }

  render() {
    const {content, status, version} = this.state
    const {repo, org, name, path} = this.props

    return (
      <MdContent
        name={name}
        repo={repo}
        content={content}
        status={status}
        org={org}
        editUrl={getBlobUrl(repo, path, 'master', org)}
        version={version}
        onChangeVersion={this.onChangeVersion}
      />
    )
  }
}
