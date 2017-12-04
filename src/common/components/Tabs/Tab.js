import React, {PureComponent, PropTypes} from 'react'
import lighten from 'polished/lib/color/lighten'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'
import {transition} from 'common/utils/styles'

const styles = theme => ({
  tab: {
    font: {
      family: theme.typography.fontFamily,
      size: theme.typography.fontSize * 1.1,
    },
    background: 'transparent',
    padding: [15, 20],
    border: 0,
    outline: 0,
    borderBottom: [3, 'solid', lighten(0.5, theme.dark)],
    color: theme.text.light,
    cursor: 'pointer',
    transition: transition(),
    '&:hover': {
      isolate: false,
      borderBottomColor: theme.dark,
    }
  },
  active: {
    isolate: false,
    borderBottomColor: theme.dark,
  }
})

class Tab extends PureComponent {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    active: PropTypes.bool,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: null,
    active: false,
  }

  onClick = (event) => {
    const {onChange, index} = this.props
    onChange(event, index)
  }

  render() {
    const {className, classes, children, active} = this.props
    return (
      <button
        className={cn(className, classes.tab, active && classes.active)}
        onClick={this.onClick}
      >
        {children}
      </button>
    )
  }
}

export default injectSheet(styles)(Tab)
