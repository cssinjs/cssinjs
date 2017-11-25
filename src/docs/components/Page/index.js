import React, {PureComponent, PropTypes} from 'react'
import {browserHistory as history} from 'react-router'

import injectSheet from 'common/utils/jss'

import Content from '../../containers/MdContent'
import {map as navMap, home} from '../../utils/navigation'
import NotFound from '../NotFound'
import Iframe from '../Iframe'
import styles from './styles'

class Page extends PureComponent {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    location: PropTypes.object.isRequired, // eslint-disable-line
    params: PropTypes.object.isRequired // eslint-disable-line
  }

  onChangeVersion = ({value}) => {
    history.replace({
      ...history.getCurrentLocation(),
      query: {v: value}
    })
  }

  render() {
    const {classes, params, location: {query}} = this.props

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
