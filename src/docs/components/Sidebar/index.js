import React, {Component, PropTypes} from 'react'
import Link from 'react-router/lib/Link'
import cn from 'classnames'
import {repo, docs as config} from 'common/config'
import injectSheet from 'common/utils/jss'
import {Logo} from 'common/components/icons'
import GithubWidget from 'common/containers/GithubWidget'
import Hamburger from '../Hamburger'
import Menu from '../Menu'
import styles from './styles'

class Sidebar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  /**
   * Just a trick. On menu click component recieve new props
   * If there is any new prop - just close menu
   * (because props change only if we navigate through application)
   */
  componentWillReceiveProps() {
    this.setState({
      showMenu: false
    })
  }

  onToggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const {classes, className} = this.props
    const {showMenu} = this.state

    return (
      <aside className={cn(classes.sidebar, className)}>
        <Link to={`/${config.rootDir}`} className={classes.logoContainer}>
          <Logo className={classes.logo} inverse />
        </Link>
        <GithubWidget className={classes.counter} repo={repo} />
        <button className={classes.toggle} onClick={this.onToggleMenu}>
          <Hamburger active={showMenu} />
        </button>
        <div className={cn(classes.menu, showMenu && classes.active)}>
          <Menu />
        </div>
      </aside>
    )
  }
}

export default injectSheet(styles)(Sidebar)
