import React, {PureComponent, PropTypes} from 'react'
import marked from 'marked'

import {getInvertedPages, getExternalPages} from '../../helpers/pagesActions'
import jssPreset from '../../helpers/jssPreset'
import VersionSelect from '../../containers/VersionSelect'
import EditLink from '../EditLink'
import NotFound from '../NotFound'
import {processCode, processLinks, onAnchorClick} from './utils'
import styles from './styles'

/**
 * Render markdown content.
 */
class Content extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    onChangeVersion: PropTypes.func.isRequired,
    cdnUrl: PropTypes.string,
    editUrl: PropTypes.string,
    repo: PropTypes.string,
    linksReference: PropTypes.object, // Object in format { pageName: 'http://url.com/'}
    status: PropTypes.number
  }

  static defaultProps = {
    content: ''
  }

  /**
   * Class constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props)
    this.links = getInvertedPages(props.linksReference)
    this.externalLinks = getExternalPages()
  }

  componentDidMount() {
    // Handle internal anchors.
    this.content.addEventListener('click', onAnchorClick)
  }

  onRefContent = (ref) => {
    this.content = ref
  }

  /**
   * Create markup using MD syntax as input
   * @returns {String} html, that can be appended to DOM
   */
  getHtml() {
    // First of all - convert markdown to pure HTML markup string
    const textContent = marked(this.props.content)

    // Convert string to real HTML markup
    const content = document.createElement('div')
    content.innerHTML = textContent

    // Highlight all code blocks
    processCode(content)

    // Process all links one by one
    if (this.props.cdnUrl) {
      processLinks(content, this.links, this.externalLinks, this.props.cdnUrl)
    }

    return content.outerHTML
  }

  /**
   * React component render
   */
  render() {
    const {
      sheet: {classes},
      editUrl,
      repo,
      onChangeVersion,
      status
    } = this.props


    return (
      <div className={classes.container}>
        <div className={classes.content}>
          {repo && <VersionSelect repo={repo} onChange={onChangeVersion} />}
          {status === 404 && <NotFound />}
          <div className={classes.edit}>
            {editUrl && <EditLink url={editUrl} />}
          </div>
          <div
            className={classes.contentInner}
            ref={this.onRefContent}
            dangerouslySetInnerHTML={{__html: this.getHtml()}}
          />
        </div>
      </div>
    )
  }
}

export default jssPreset(styles)(Content)
