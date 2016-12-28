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

  constructor(props) {
    super(props)
    this.pages = flattenPages()
  }

  componentWillMount() {
    animateScroll.scrollToTop()
  }

  render() {
    const {
      sheet: {classes},
      params
    } = this.props

    const page = this.pages[params.page]

    if (!page) return <NotFound />

    return (
      <div className={classes.container}>
        {this.props.isHomepage ? <ParallaxScene /> : <span className={classes.hidden} />}
        <div className={classes.content} id="mainContent">
          <Content
            {...page}
            // XXX it expects: {name: url}
            linksReference={this.pages}
          />
        </div>
      </div>
    )
  }
}

export default jssPreset(styles)(Page)
