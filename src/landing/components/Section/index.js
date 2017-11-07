import React, {PureComponent, PropTypes} from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'
import {getColorSchemes} from 'common/utils/styles'
import colorSchemes from 'common/constants/colorScheme'
import Header from '../Header'

const styles = theme => ({
  ...getColorSchemes(),
  section: {
    position: 'relative',
    width: '100%',
  },
  nav: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    pointerEvents: 'none',
    clip: 'rect(auto, auto, auto, auto)',
  },
  content: {
    minHeight: 400,
  }
})

class Section extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    showHeader: PropTypes.bool,
    colorScheme: PropTypes.oneOf(colorSchemes)
  }

  static defaultProps = {
    showHeader: true
  }

  renderHeader = () => {
    const {classes, showHeader, colorScheme} = this.props

    return showHeader && (
      <div className={classes.nav}>
        <Header colorScheme={colorScheme} />
      </div>
    )
  }

  render() {
    const {children, classes, colorScheme} = this.props

    return (
      <div className={cn(classes.section, classes[colorScheme])}>
        {this.renderHeader()}
        <div className={classes.content}>
          {children}
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Section)
