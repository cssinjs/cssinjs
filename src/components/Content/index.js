import React, {PureComponent, PropTypes} from 'react'

import jssPreset from '../../helpers/jssPreset'
import VersionSelect from '../../containers/VersionSelect'
import EditLink from '../EditLink'
import NotFound from '../NotFound'
import HighlightedMarkdown from '../HighlightedMarkdown'
import styles from './styles'

/**
 * Render markdown content.
 */
class Content extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    onChangeVersion: PropTypes.func.isRequired,
    editUrl: PropTypes.string,
    repo: PropTypes.string,
    org: PropTypes.string,
    status: PropTypes.number
  }

  static defaultProps = {
    content: ''
  }

  render() {
    const {
      sheet: {classes},
      editUrl,
      repo,
      org,
      onChangeVersion,
      status,
      content
    } = this.props

    return (
      <div className={classes.container}>
        <div className={classes.content}>
          {repo && <VersionSelect repo={repo} org={org} onChange={onChangeVersion} />}
          {status === 404 && <NotFound />}
          <div className={classes.edit}>
            {editUrl && <EditLink url={editUrl} />}
          </div>
          <HighlightedMarkdown text={content} className={classes.markdown} />
        </div>
      </div>
    )
  }
}

export default jssPreset(styles)(Content)
