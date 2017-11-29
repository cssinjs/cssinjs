import React, {PureComponent, PropTypes} from 'react'
import {browserHistory as history} from 'react-router'
import injectSheet from 'common/utils/jss'
import Iframe from 'common/components/Iframe'
import Content from '../../containers/MdContent'
import {map as navMap, home} from '../../utils/navigation'
import NotFound from '../NotFound'

const styles = theme => ({
  page: {
    minHeight: '100vh',
    background: theme.pageBackground,
  },
  frame: {
    height: '100vh',
  },
  content: {
    maxWidth: 1000,
    margin: [0, 'auto'],
    padding: 50,
  },
  [theme.media.sm]: {
    content: {
      padding: [30, 20],
    }
  }
})

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
    if (page.iframe) {
      return (
        <div className={classes.frame}>
          <Iframe src={page.url} />
        </div>
      )
    }

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
