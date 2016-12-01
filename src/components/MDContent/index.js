import React from 'react'
import 'whatwg-fetch' // eslint-disable-line
import marked from 'marked'

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

  /**
   * Helper function for check XHR response status
   */
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(this.checkStatus)
      .then(response => response.text())
      .then(text => {



        // TODO: Not just setState. Process in some way loaded text...

        // TODO: Avoid XSS attack. Seek for script tag and remove them all

        this.setState({
          loadedContent: text
        })

      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(`Request failed. Something went wrong with Github API or url passed to component. ERROR: ${error}`)
      })
  }

  componentWillUnmount() {
    // TODO: If go out - stop loading
  }

  createMarkup() {
    // First of all - convert markdown to pure HTML markup string
    const textContent = marked(this.state.loadedContent)

    // Convert string to real HTML markup
    let htmlContent = document.createElement('div')
    htmlContent.innerHTML = textContent

    console.log('>>>>>>>>>>>>>>>>>>>>>')




    return {__html: htmlContent.outerHTML }
  }

  /**
   * React component render
   */
  render() {
    const {classes} = this.props.sheet

    const convertedContent = marked(this.state.loadedContent)

    return (
      <div className={classes.container}>
        <div className={this.state.loadedContent ? classes.loaded : classes.loader}>
          <Loader playing={this.state.loadedContent ? true : false} />
        </div>
        <div
          className={this.state.loadedContent ? classes.contentLoaded : classes.content}
          dangerouslySetInnerHTML={this.createMarkup()}
        >
          {/*
              TODO: Use dangerouslySetInnerHTML
              https://facebook.github.io/react/docs/dom-elements.html
          */}
        </div>
      </div>
    )
  }
}

export default jssPreset(styles)(MDContent)
