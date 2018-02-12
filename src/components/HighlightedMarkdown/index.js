import React, {PureComponent, PropTypes, createElement} from 'react'
import Markdown from 'markdown-react-js'
import cn from 'classnames'

import ScrollToHash from '../ScrollToHash'
import injectSheet from 'react-jss'
import Code from './Code'
import A from './A'
import H from './H'
import styles from './styles'

// There was a wrong formatted image url in all our .md files, now its fixed
// but we still need to support older versions.
const fixGitterBadge = text => text.replace(/Join Chat\.svg/g, 'JoinChat.svg')

const markdownOptions = {
  html: true,
  linkify: true
}

const headlines = ['h1', 'h2', 'h3', 'h4', 'h5']

class HighlightedMarkdown extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: ''
  }

  onIterate = (tag, props, children, level) => {
    if (tag === 'a') return <A {...props} page={this.props.page}>{children}</A>
    if (tag === 'code') return <Code lang={props['data-language']} text={children[0]} />
    // React throws if children are passed to img.
    if (tag === 'img') return createElement(tag, props)
    if (headlines.indexOf(tag) !== -1) {
      return <H {...props} tag={tag} classes={this.props.classes}>{children}</H>
    }
    // Process top level node to convert possible stringified html to real one
    if (level === 0) children = this.iterateChildren(children, tag)
    return createElement(tag, props, children)
  }

  iterateChildren = (node, tag) => {
    node = node.map((entry) => {
      // Suppose, if string starts with '<' - its a html markup
      if (typeof entry === 'string' && /<[a-z][\s\S]*>/i.test(entry)) {
        return createElement(tag, {dangerouslySetInnerHTML: {__html: entry}})
      }
      if (typeof entry === 'object' && entry.children) {
        entry.children = this.iterateChildren(entry.children, tag)
      }
      return entry
    })
    return node
  }

  render() {
    const {classes, className, text} = this.props

    // Server side rendering throws erros.
    // So we need to handle situation when text comes undefined
    if (!text) return <div />

    return (
      <ScrollToHash>
        <Markdown
          markdownOptions={markdownOptions}
          className={cn(classes.highlightedMarkdown, className)}
          text={fixGitterBadge(text)}
          onIterate={this.onIterate}
        />
      </ScrollToHash>
    )
  }
}

export default injectSheet(styles)(HighlightedMarkdown)
