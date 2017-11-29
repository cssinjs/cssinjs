import React, {PureComponent, PropTypes} from 'react'
import injectSheet from 'common/utils/jss'

const styles = theme => ({
  versionSelect: {
    display: 'flex',
    alignItems: 'center',
  },
  select: {
    cursor: 'pointer',
    background: 'transparent',
    outline: 'none',
    border: [1, 'solid', theme.borderColor],
    color: theme.textColor,
    padding: [0, 6],
    width: 70,
    height: '100%',
    boxSizing: 'content-box',
    font: {
      family: theme.fontFamily,
      size: 14,
      lineHeight: 'normal',
    }
  }
})

const formatVersion = version => (
  isNaN(parseFloat(version)) ? version : `v${version}`
)

class VersionSelect extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    versions: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string,
    classes: React.PropTypes.objectOf(PropTypes.string).isRequired
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
