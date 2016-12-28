import React, {PureComponent, PropTypes} from 'react'
import VersionSelect from '../components/VersionSelect'

const loadVersions = repo => (
  fetch(`//api.github.com/repos/cssinjs/${repo}/tags`)
    .then(response => response.text())
    .then(data => JSON.parse(data))
    .then(tags => tags.map(tag => tag.name))
)

export default class VersionSelectContainer extends PureComponent {
  static propTypes = {
    repo: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      versions: []
    }
  }

  componentWillMount() {
    const {repo} = this.props
    loadVersions(repo).then((versions) => {
      this.setState({versions})
    })
  }

  onChange = ({value}) => {
    this.setState({value})
    this.props.onChange({value})
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
        onChange={this.onChange}
      />
    )
  }
}
