import React from 'react'
import {animateScroll} from 'react-scroll'
import 'whatwg-fetch' // eslint-disable-line
import marked from 'marked'

import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-css.min.js'
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-bash.min.js'

import Loader from '../Loader'
import EditLink from '../EditLink'

import {getInvertedPages, getExternalPages} from '../../helpers/pagesActions'
import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

const GITHUB_URL = 'github.com'
const GITHUB_RAW_URL = 'raw.githubusercontent.com'
const ANCHOR_NAME = 'internalAnchor'

/**
 * Markdown fetching, parsing and rendering class
 * @extends React.Component
 */
class MDContent extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object,
    url: React.PropTypes.string.isRequired,
    linksReference: React.PropTypes.object, // Object in format { pageName: 'http://url.com/'}
  }

  /**
   * Helper function for check XHR response status
   */
  static checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }

  /**
   * Modify each <code> tags adding code highlighting
   * @param {HTMLElement} markup, that need to be processed
   * @returns {HTMLElement} processed markup
   */
  static processCode(content) {
    // Because nodeList doesn't support forEach
    [...content.querySelectorAll('code')].forEach((block) => {
      Prism.highlightElement(block)
    })
    return content
  }

  /**
   * Create edit link for current GitHub page
   * @param {string} original link
   * @returns {string} processed link
   */
  static getEditLink(link) {
    // TODO: Find a needed position by 'master' branch.
    // It doesn'n work if branch will be not in master branch
    const insertPosition = link.indexOf('/master')
    link = `${link.slice(0, insertPosition)}/blob${link.slice(insertPosition, link.length)}`
    return link.replace(GITHUB_RAW_URL, GITHUB_URL).replace()
  }

  /**
   * Class constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props)
    this.state = {
      loadedContent: '',
    }

    this.links = getInvertedPages(this.props.linksReference)
    this.externalLinks = getExternalPages()
  }

  componentDidMount() {
    // Fetch data from passed url
    fetch(this.props.url)
      .then(this.checkStatus)
      .then(response => response.text())
      .then((text) => {
        this.setState({
          loadedContent: text
        })
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(`Request failed. Something went wrong with Github API or url passed to component. ERROR: ${error}`)
      })

    // Add event listeners to internal anchors
    this.content.addEventListener('click', this.handleAnchorClick)
  }

  /**
   * Achor click handler. On click must scroll to needed target
   * @param {Object} event passed from original listener
   */
  handleAnchorClick(e) {
    const el = e.target

    if (el.getAttribute('ref') === ANCHOR_NAME) {
      e.preventDefault()
      const target = this.querySelector(`${el.getAttribute('href')}-`)
      if (target) {
        animateScroll.scrollTo(target.offsetTop)
      }
    }
  }

  /**
   * Modify each <a> tag to fit internal structure
   * @param {HTMLElement} markup, that need to be processed
   * @returns {HTMLElement} processed markup
   */
  processLinks(content) {
    // Because nodeList doesn't support forEach
    [...content.querySelectorAll('a')].forEach((link) => {
      // Convert github link to RAW format and compare with internal pages structure
      let href = link.getAttribute('href')
      let endingAnchor = ''

      // For situation when we have link with anchor.
      // Store anchor in variable, leave link without anchor
      // If link isn't internal - return acnhor back (see below)
      if (!href.startsWith('#') && href.includes('#')) {
        href = href.split('#')
        // TODO: Handle in some way internal links with anchors e.g. '#/plugins#anchor'
        endingAnchor = `${href[1]}`
        href = href[0]
      }

      if (href.indexOf(GITHUB_URL) > -1) {
        href = href.replace(GITHUB_URL, GITHUB_RAW_URL).replace('blob/', '')
        // Suppose, if page end without .md - isn't direct link to something
        if (!href.endsWith('.md')) {
          // Try to resolve link (just adding 'readme.md' to end of it)
          // Because somewhere there are uppercased names, somewhere - lowercased :(
          if (this.links[`${href}/master/readme.md`]) {
            link.setAttribute('href', `#/${this.links[`${href}/master/readme.md`]}`)
          }
          if (this.links[`${href}/master/README.md`]) {
            link.setAttribute('href', `#/${this.links[`${href}/master/README.md`]}`)
          }
          return
        }
      }

      // Internal navigation inside repo
      if (href.startsWith('./')) {
        const startUrl = this.props.url.substring(0, this.props.url.lastIndexOf('/'))
        const endUrl = href.substr(1)
        href = startUrl + endUrl
      }

      // Link is inside internal structure but set external
      if (this.externalLinks[this.links[href]]) {
        link.setAttribute('target', '_blank')
        return
      }

      // If is in internal structure - change url to fit it
      if (this.links[href]) {
        link.setAttribute('href', `#/${this.links[href]}`)
        return
      }

      // If is internal anchor
      if (href.startsWith('#')) {
        link.setAttribute('ref', ANCHOR_NAME)
        return
      }

      // No options - is extenral link open in new window
      link.setAttribute('target', '_blank')
      // Return back ending anchor
      link.setAttribute('href', `${href}#${endingAnchor}`)
    })
    return content
  }

  /**
   * Create markup using MD syntax as input
   * @param {string} markdown syntax string that need to be converted
   * @returns {Object} html, that can be appended to DOM
   */
  createMarkup(mdText) {
    // First of all - convert markdown to pure HTML markup string
    const textContent = marked(mdText)

    // Convert string to real HTML markup
    let htmlContent = document.createElement('div')
    htmlContent.innerHTML = textContent

    // Highlight all code blocks
    htmlContent = this.constructor.processCode(htmlContent)
    // Process all links one by one
    htmlContent = this.processLinks(htmlContent)

    return {__html: htmlContent.outerHTML}
  }

  /**
   * React component render
   */
  render() {
    const {classes} = this.props.sheet

    return (
      <div className={classes.container}>
        <div className={this.state.loadedContent ? classes.loaded : classes.loader}>
          <Loader playing={this.state.loadedContent} />
        </div>
        <div className={this.state.loadedContent ? classes.contentLoaded : classes.content}>
          <div className={classes.edit}>
            <EditLink url={this.constructor.getEditLink(this.props.url)} />
          </div>
          <div
            className={classes.contentInner}
            ref={(target) => {
              this.content = target
            }}
            dangerouslySetInnerHTML={this.createMarkup(this.state.loadedContent)}
          />
        </div>
      </div>
    )
  }
}

export default jssPreset(styles)(MDContent)
