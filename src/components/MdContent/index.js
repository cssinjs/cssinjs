import React, {PureComponent, PropTypes} from 'react'

import injectSheet from '../../utils/jss'
import VersionSelect from '../../containers/VersionSelect'
import ScrollToHash from '../ScrollToHash'
import EditLink from '../EditLink'
import NotFound from '../NotFound'
import HighlightedMarkdown from '../HighlightedMarkdown'
import styles from './styles'

/**
 * Render markdown content.
 */
class MdContent extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    onChangeVersion: PropTypes.func.isRequired,
    editUrl: PropTypes.string,
    repo: PropTypes.string,
    org: PropTypes.string,
    name: PropTypes.string,
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
      content,
      name
    } = this.props

    if (status === 404) return <NotFound />

    return (
      <div className={classes.mdContent}>
        <div className={classes.content}>
          <div className={classes.actions}>
            <div className={classes.action}>
              {editUrl && <EditLink url={editUrl} />}
            </div>
            <div className={classes.action}>
              {repo && <VersionSelect repo={repo} org={org} onChange={onChangeVersion} />}
            </div>
          </div>
          <ScrollToHash isReady={Boolean(content)}>
            <HighlightedMarkdown text={content} className={classes.markdown} page={name} />
          </ScrollToHash>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(MdContent)
