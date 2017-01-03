import React from 'react'

import Logo from '../Logo'
import GithubWidget from '../GithubWidget'
import Hamburger from '../Hamburger'
import Menu from '../Menu'

import config from '../../config'
import injectSheet from '../../utils/jss'
import styles from './styles'

/**
 * Sidebar component class
 * @extends React.Component
 */
class Sidebar extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      isActiveMenu: false
    }
  }

  /**
   * Just a trick. On menu click component recieve new props
   * If there is any new prop - just close menu
   * (because props change only if we navigate through application)
   */
  componentWillReceiveProps() {
    this.setState({
      isActiveMenu: false
    })
  }

  render() {
    const {classes} = this.props.sheet
    const toggleMenu = () => {
      this.setState({
        isActiveMenu: !this.state.isActiveMenu
      })
    }

    return (
      <div className={classes.sidebar}>
        <div className={classes.logo}>
          <Logo type="white" />
        </div>
        <div className={classes.counter}>
          <GithubWidget repo={config.site.repo} />
        </div>
        <button className={classes.toggle} onClick={toggleMenu}>
          <Hamburger active={this.state.isActiveMenu} />
        </button>
        <div className={this.state.isActiveMenu ? classes.menuActive : classes.menu}>
          <Menu />
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Sidebar)
