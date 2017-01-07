import React, {PureComponent, PropTypes} from 'react'
import VersionSelect from '../components/VersionSelect'
import {loadTags} from '../utils/github'

// Last version used for a certain repository.
// Once user switches to another page from the same repository, he doesn't
// need to select the version again.
const lastVersionMap = {}

const loadCachedTags = (() => {
  const cache = {}
  return (...args) => {
    const key = args.join('')
    if (cache[key]) return Promise.resolve(cache[key])
    return loadTags(...args).then((tags) => {
      cache[key] = tags
      return tags
    })
  }
})()

/**
 * Get only latest major versions from the list.
 */
const getMajorVersions = (versions) => {
  const map = {}
  return versions.filter((version) => {
    const majorVersion = Number(/\d{1}/.exec(version))
    if (map[majorVersion]) return false
    map[majorVersion] = true
    return true
  })
}

const loadVersions = (repo, org) => (
  loadCachedTags(repo, org)
    .then(getMajorVersions)
    .then(versions => [...versions, 'master'])
)

export default class VersionSelectContainer extends PureComponent {
  static propTypes = {
    repo: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    org: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      versions: ['––.––.––']
    }
  }

  componentDidMount() {
    const {repo, org} = this.props
    loadVersions(repo, org).then(this.onLoadVersions)
  }

  onLoadVersions = (versions) => {
    const {repo} = this.props
    this.setState({versions})
    this.onChangeVersion({value: lastVersionMap[repo] || versions[0]})
  }

  onChangeVersion = ({value}) => {
    const {repo, onChange} = this.props
    lastVersionMap[repo] = value
    this.setState({value})
    onChange({value})
  }

  render() {
    const {
      versions,
      value
    } = this.state

    return (
      <VersionSelect
        versions={versions}
        value={value}
        onChange={this.onChangeVersion}
      />
    )
  }
}
