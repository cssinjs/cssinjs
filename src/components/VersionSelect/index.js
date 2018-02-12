import React, {PureComponent, PropTypes} from 'react'

import injectSheet from 'react-jss'
import styles from './styles'

const formatVersion = version => (
  isNaN(parseFloat(version)) ? version : `v${version}`
)

class VersionSelect extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    versions: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string,
    classes: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    value: ''
  }

  onChange = (e) => {
    const {value} = e.target
    this.props.onChange({value})
  }

  render() {
    const {
      classes,
      versions,
      value
    } = this.props

    return (
      <div className={classes.versionSelect}>
        <select className={classes.select} value={value} onChange={this.onChange}>
          <option disabled>Version</option>
          {versions.map(version => (
            <option value={version}>
              {formatVersion(version)}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default injectSheet(styles)(VersionSelect)
