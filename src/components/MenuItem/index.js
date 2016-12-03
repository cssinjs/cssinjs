import React from 'react'
import Isvg from 'react-inlinesvg'

import {Link} from 'react-router'

import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

class MenuItem extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object,
    children: React.PropTypes.node,
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    realLink: React.PropTypes.string,
    haveChildren: React.PropTypes.bool,
    home: React.PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {
      isChildVisible: false
    }
  }

  render() {
    const {classes} = this.props.sheet

    const toggleChildren = () => {
      this.setState({
        isChildVisible: !this.state.isChildVisible
      })
    }

    // Render toggle item for children content
    const renderItemToggler = () => {
      if (this.props.haveChildren) {
        return (
          <button className={classes.icons} onClick={toggleChildren}>
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

    // Render children inside link
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

    // Create layout for link
    const renderLink = () => {
      if (this.props.realLink) {
        return (
          <Link
            className={this.state.isChildVisible ? classes.linkActive : classes.link}
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
        <div className={this.state.isChildVisible ? classes.linkActive : classes.link}>
          {this.props.name}
        </div>
      )
    }

    // Render main layout
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
