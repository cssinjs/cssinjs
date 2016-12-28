import React, {PureComponent, PropTypes} from 'react'
import Isvg from 'react-inlinesvg'
import Link from 'react-router/lib/Link'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

class MenuItem extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    home: PropTypes.bool,
    children: PropTypes.node,
    external: PropTypes.bool,
    url: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      showChildren: false
    }
  }

  /**
   * Click Handler. Opens/Closes child menu
   */
  onToggle = () => {
    this.setState({
      showChildren: !this.state.showChildren
    })
  }

  /**
   * React component render
   */
  render() {
    const {classes} = this.props.sheet

    /**
     * Render toggle item for children content
     */
    const renderItemToggler = () => {
      if (this.props.children) {
        return (
          <button className={classes.icons} onClick={this.onToggle}>
            <Isvg
              src={'images/arrow.svg'}
              className={this.state.showChildren ? classes.iconArrowHidden : classes.iconArrow}
            />
            <Isvg
              src={'images/close.svg'}
              className={this.state.showChildren ? classes.iconClose : classes.iconCloseHidden}
            />
          </button>
        )
      }
      return <span />
    }

    const renderChildren = () => {
      if (this.props.children) {
        return (
          <div className={this.state.showChildren ? classes.childWrapActive : classes.childWrap}>
            <div className={classes.children}>
              {this.props.children}
            </div>
          </div>
        )
      }
      return <span />
    }

    /**
     * Detects wich link class need to be added
     */
    const setLinkClass = () => {
      if (this.state.showChildren) {
        if (this.props.children) return classes.linkActive
        return classes.linkActiveNoChildren
      }
      if (this.props.children) return classes.link
      return classes.linkNoChildren
    }

    /**
     * Create layout for link
     */
    const renderLink = () => {
      if (this.props.external) {
        // External link
        return (
          <a
            className={setLinkClass()}
            href={this.props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.title}
          </a>
        )
      }

      // Internal router link
      return (
        <Link
          className={setLinkClass()}
          activeClassName={classes.linkActive}
          to={{
            pathname: this.props.name,
            state: {
              isHomepage: this.props.home // Pass homepage param to router
            }
          }}
        >
          {this.props.title}
        </Link>
      )
    }

    return (
      <div className={classes.container}>
        <div className={classes.item}>
          {renderLink()}
          {renderItemToggler()}
        </div>
        {renderChildren()}
      </div>
    )
  }
}

export default jssPreset(styles)(MenuItem)
