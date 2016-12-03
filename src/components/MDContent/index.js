import React from 'react'
import 'whatwg-fetch' // eslint-disable-line
import marked from 'marked'

import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-css.min.js'
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-bash.min.js'

import Loader from '../Loader'

import {invert as invertPages} from '../../helpers/pagesActions'
import jssPreset from '../../helpers/jssPreset'
import styles from './styles'


// ------------------------------------------------------
// TODO:
// 1. Fetch MD file by url
// 2. Look at all links
// 2.1. If link is in this.links - change <a> tag with <Link> tag
// 2.2. Else - add target="_blank"
// 3. Parse all code block, add some coding highlighter
//
// What to use:
// https://github.com/evilstreak/markdown-js
// https://highlightjs.org/
// ------------------------------------------------------


// /**
//  * Helper function for check XHR response status
//  */
// const checkStatus = (response) => {
//   if (response.status >= 200 && response.status < 300) {
//     return response
//   }
//   const error = new Error(response.statusText)
//   error.response = response
//   throw error
// }

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
   * Class constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props)
    this.state = {
      loadedContent: '',
    }

    this.links = invertPages(this.props.linksReference)
  }


  componentDidMount() {
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
  }

  createMarkup() {
    // First of all - convert markdown to pure HTML markup string
    const textContent = marked(this.state.loadedContent)

    // Convert string to real HTML markup
    const htmlContent = document.createElement('div')
    htmlContent.innerHTML = textContent

    // Highlight all code blocks
    htmlContent.querySelectorAll('code').forEach((block) => {
      Prism.highlightElement(block)
    })

    // Replace external links with internal ones

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
        <div
          className={this.state.loadedContent ? classes.contentLoaded : classes.content}
          dangerouslySetInnerHTML={this.createMarkup()}
        />
      </div>
    )
  }
}

export default jssPreset(styles)(MDContent)
