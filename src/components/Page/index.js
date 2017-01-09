import React, {PureComponent, PropTypes} from 'react'
import {browserHistory as history} from 'react-router'

import injectSheet from '../../utils/jss'
import Content from '../../containers/MdContent'
import {map as navMap, home} from '../../utils/navigation'
import NotFound from '../NotFound'
import Iframe from '../Iframe'
import styles from './styles'

class Page extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
  }

  onChangeVersion = ({value}) => {
    history.replace({
      ...history.getCurrentLocation(),
      query: {v: value}
    })
  }

  render() {
    const {
      sheet: {classes},
      params,
      location: {query}
    } = this.props

    const name = params.page || home.name
    const page = navMap[name]

    if (!page || name === '404') return <NotFound />
    if (page.iframe) return <Iframe src={page.url} />

    return (
      <div className={classes.page}>
        <div className={classes.content}>
          <Content
            {...page}
            query={query}
            onChangeVersion={this.onChangeVersion}
          />
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Page)
