import React, {PureComponent, PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import {org as organization} from 'common/utils/github'
import {md as mediaMd, sm as mediaSm} from 'common/constants/media'
import VersionSelect from '../../containers/VersionSelect'
import EditLink from '../EditLink'
import NotFound from '../NotFound'
import HighlightedMarkdown from '../HighlightedMarkdown'

const styles = theme => ({
  content: {
    position: 'relative',
  },
  markdown: {
    display: 'block',
  },
  actions: {
    float: 'right',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 5,
    marginLeft: 20
  },
  action: {
    display: 'flex',
    height: 30,
    borderRight: [1, 'solid', theme.common.border],
    paddingRight: 20,
    marginLeft: 20,
    '&:last-child': {
      isolate: false,
      borderRight: 0,
      paddingRight: 0
    },
    '&:first-child': {
      marginLeft: 0
    }
  },
  // Removes inlining with title.
  [mediaMd]: {
    actions: {
      float: 'none',
      justifyContent: 'flex-end',
      marginBottom: 20,
    }
  },
  [mediaSm]: {
    actions: {
      justifyContent: 'center'
    }
  }
})


class MdContent extends PureComponent {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
    onChangeVersion: PropTypes.func.isRequired,
    editUrl: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    org: PropTypes.string,
    name: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    version: PropTypes.string
  }

  static defaultProps = {
    org: organization,
    content: '',
    version: ''
  }

  render() {
    const {
      classes,
      editUrl,
      repo,
      org,
      version,
      onChangeVersion,
      status,
      content,
      name
    } = this.props

    if (status === 404) return <NotFound />

    return (
      <div className={classes.content}>
        <div className={classes.actions}>
          <div className={classes.action}>
            {editUrl && <EditLink url={editUrl} />}
          </div>
          <div className={classes.action}>
            {repo && (
              <VersionSelect
                repo={repo}
                org={org}
                value={version}
                onChange={onChangeVersion}
              />
            )}
          </div>
        </div>
        <HighlightedMarkdown text={content} className={classes.markdown} page={name} />
      </div>
    )
  }
}

export default injectSheet(styles)(MdContent)
