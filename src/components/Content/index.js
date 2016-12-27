import React, {Component, PropTypes} from 'react'
import marked from 'marked'

import {getInvertedPages, getExternalPages} from '../../helpers/pagesActions'
import jssPreset from '../../helpers/jssPreset'
import EditLink from '../EditLink'
import {processCode, processLinks, getEditLink, onAnchorClick} from './utils'
import styles from './styles'

/**
 * Render markdown content.
 */
class Content extends Component {
  static propTypes = {
    sheet: PropTypes.object,
    url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    linksReference: PropTypes.object, // Object in format { pageName: 'http://url.com/'}
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
    processLinks(content, this.links, this.externalLinks, this.props.url)

    return content.outerHTML
  }

  /**
   * React component render
   */
  render() {
    const {
      sheet: {classes},
      url
    } = this.props

    return (
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.edit}>
            <EditLink url={getEditLink(url)} />
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
