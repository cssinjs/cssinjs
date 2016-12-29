import React, {PureComponent, PropTypes} from 'react'
import {animateScroll} from 'react-scroll'

import ParallaxScene from '../ParallaxScene'
import NotFound from '../NotFound'
import Content from '../../containers/Content'

import {flattenPages} from '../../helpers/pagesActions'
import injectSheet from '../../utils/jss'
import styles from './styles'

/**
 * Common application page rapresenting class
 */
class Page extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    params: PropTypes.object,
    home: PropTypes.bool
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
        {this.props.home ? <ParallaxScene /> : <span className={classes.hidden} />}
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

export default injectSheet(styles)(Page)
