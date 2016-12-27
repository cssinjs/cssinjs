import React from 'react'
import {animateScroll} from 'react-scroll'

import ParallaxScene from '../ParallaxScene'
import NotFound from '../NotFound'
import Content from '../../containers/Content'

import {flattenPages} from '../../helpers/pagesActions'
import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/**
 * Common application page rapresenting class
 * @extends React.Component
 */
class Page extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object,
    params: React.PropTypes.object,
    isHomepage: React.PropTypes.bool
  }

  /**
   * Class constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props)
    this.pages = flattenPages()
  }

  componentWillMount() {
    animateScroll.scrollToTop()
  }

  /**
   * React component render
   */
  render() {
    const {classes} = this.props.sheet
    const currentPage = this.props.params.page

    // If page doesn't exists - render 404 page
    if (!this.pages[currentPage]) {
      return <NotFound />
    }

    return (
      <div className={classes.container}>
        {this.props.isHomepage ? <ParallaxScene /> : <span className={classes.hidden} />}
        <div className={classes.content} id="mainContent">
          <Content
            url={this.pages[currentPage]}
            linksReference={this.pages}
          />
        </div>
      </div>
    )
  }
}

export default jssPreset(styles)(Page)
