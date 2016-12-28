import React, {PureComponent, PropTypes} from 'react'
import VersionSelect from '../components/VersionSelect'
import {loadTags} from '../utils/github'

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
    const {repo, onChange} = this.props
    loadTags(repo).then((versions) => {
      const value = versions[0]
      this.setState({versions, value})
      onChange({value})
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
