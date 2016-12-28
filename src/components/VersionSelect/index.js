import React, {PureComponent, PropTypes} from 'react'

export default class VersionSelect extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    versions: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string
  }

  onChange = (e) => {
    const {value} = e.target
    this.props.onChange({value})
  }

  render() {
    const {
      versions,
      value
    } = this.props

    return (
      <select value={value} onChange={this.onChange}>
        {versions.map(version => (
          <option value={version}>
            {version}
          </option>
        ))}
      </select>
    )
  }
}
