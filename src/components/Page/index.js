import React, {PropTypes} from 'react'

import injectSheet from '../../utils/jss'
import Content from '../../containers/MdContent'
import {map as navMap, home} from '../../utils/navigation'
import NotFound from '../NotFound'
import Iframe from '../Iframe'
import styles from './styles'

/**
 * Common application page rapresenting class
 */
function Page(props) {
  const {
    sheet: {classes},
    params
  } = props

  const name = params.page || home.name

  const page = navMap[name]

  if (!page || name === '404') return <NotFound />
  if (page.iframe) return <Iframe src={page.url} />

  return (
    <div className={classes.page}>
      <div className={classes.content}>
        <Content {...page} />
      </div>
    </div>
  )
}

Page.propTypes = {
  sheet: PropTypes.object.isRequired,
  params: PropTypes.object
}

export default injectSheet(styles)(Page)
