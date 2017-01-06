import React, {PureComponent, PropTypes} from 'react'
import {animateScroll} from 'react-scroll'

import NotFound from '../NotFound'
import Iframe from '../Iframe'
import Content from '../../containers/MdContent'

import {map as navMap, home} from '../../utils/navigation'
import injectSheet from '../../utils/jss'
import styles from './styles'

/**
 * Common application page rapresenting class
 */
class Page extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    params: PropTypes.object
  }

  componentDidMount() {
    animateScroll.scrollToTop()
  }

  render() {
    const {
      sheet: {classes},
      params
    } = this.props

    const name = params.page || home.name

    const page = navMap[name]

    if (!page) return <NotFound />
    if (page.iframe) return <Iframe src={page.url} />

    return (
      <div className={classes.page}>
        <div className={classes.content}>
          <Content {...page} />
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Page)
