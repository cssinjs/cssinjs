import React, {PureComponent, PropTypes} from 'react'

import injectSheet from '../../utils/jss'
import styles from './styles'

const formatVersion = version => (
  isNaN(parseFloat(version)) ? version : `v${version}`
)

class VersionSelect extends PureComponent {
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
      sheet: {classes},
      versions,
      value
    } = this.props

    return (
      <div className={classes.container}>
        <div className={classes.label}>
          Version:
        </div>
        <select className={classes.select} value={value} onChange={this.onChange}>
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