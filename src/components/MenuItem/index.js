import React from 'react'
import Isvg from 'react-inlinesvg'
import Link from 'react-router/lib/Link'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/**
 * Single menu item component
 * @extends React.Component
 */
class MenuItem extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object,
    children: React.PropTypes.node,
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    realLink: React.PropTypes.string,
    haveChildren: React.PropTypes.bool,
    home: React.PropTypes.bool,
    external: React.PropTypes.bool
  }

  /**
   * Class constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props)
    this.state = {
      isChildVisible: false
    }

    this.handleChildrenToggle = this.handleChildrenToggle.bind(this)
  }

  /**
   * Click Handler. Opens/Closes child menu
   */
  handleChildrenToggle() {
    this.setState({
      isChildVisible: !this.state.isChildVisible
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
      if (this.props.haveChildren) {
        return (
          <button className={classes.icons} onClick={this.handleChildrenToggle}>
            <Isvg
              src={'static/images/arrow.svg'}
              className={this.state.isChildVisible ? classes.iconArrowHidden : classes.iconArrow}
            />
            <Isvg
              src={'static/images/close.svg'}
              className={this.state.isChildVisible ? classes.iconClose : classes.iconCloseHidden}
            />
          </button>
        )
      }
      return <span />
    }

    /**
     * Render children inside link
     */
    const renderChildren = () => {
      if (this.props.haveChildren) {
        return (
          <div className={this.state.isChildVisible ? classes.childWrapActive : classes.childWrap}>
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
      if (this.state.isChildVisible) {
        if (this.props.haveChildren) return classes.linkActive
        return classes.linkActiveNoChildren
      }
      if (this.props.haveChildren) return classes.link
      return classes.linkNoChildren
    }

    /**
     * Create layout for link
     */
    const renderLink = () => {
      if (this.props.realLink) {
        if (this.props.external) {
          // External link
          return (
            <a
              className={setLinkClass()}
              href={this.props.realLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.name}
            </a>
          )
        }
        // Internal router link
        return (
          <Link
            className={setLinkClass()}
            activeClassName={classes.linkActive}
            to={{
              pathname: this.props.link,
              state: {
                isHomepage: this.props.home // Pass homepage param to router
              }
            }}
          >
            {this.props.name}
          </Link>
        )
      }
      return (
        <div className={setLinkClass()}>
          {this.props.name}
        </div>
      )
    }

    /**
     * Render main layout
     */
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
