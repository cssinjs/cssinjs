import React, {PureComponent, PropTypes} from 'react'
import {loadTags, org as organization} from 'common/utils/github'
import VersionSelect from '../components/VersionSelect'

// Last version used for a certain repository.
// Once user switches to another page from the same repository, he doesn't
// need to select the version again.
const lastValuesMap = {}

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

const ensureValue = (value, arr) => {
  if (arr.indexOf(value) !== -1) return arr
  return [value, ...arr]
}

export default class VersionSelectContainer extends PureComponent {
  static propTypes = {
    repo: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    org: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    org: organization,
    value: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      versions: ['––.––.––']
    }
  }

  componentDidMount() {
    const {repo, org} = this.props
    loadVersions(repo, org).then(this.onLoad)
  }

  onLoad = (versions) => {
    const value = this.getValue(versions)
    this.setState({versions: ensureValue(value, versions)})
    this.onChange({value})
  }

  onChange = ({value}) => {
    const {repo, onChange} = this.props
    lastValuesMap[repo] = value
    onChange({value})
  }

  getValue(versions) {
    const {repo, value} = this.props
    return value || lastValuesMap[repo] || versions[0]
  }

  render() {
    const {versions} = this.state
    const {value} = this.props

    return (
      <VersionSelect
        versions={versions}
        value={value}
        onChange={this.onChange}
      />
    )
  }
}
