import React, {PureComponent, PropTypes, createElement} from 'react'
import Markdown from 'markdown-react-js'
import cn from 'classnames'

import injectSheet from '../../utils/jss'
import Code from './Code'
import A from './A'
import H from './H'
import styles from './styles'

// There was a wrong formatted image url in all our .md files, now its fixed
// but we still need to support older versions.
const fixGitterBadge = text => text.replace(/Join Chat\.svg/g, 'JoinChat.svg')

const markdownOptions = {
  linkify: true
}

const headlines = ['h1', 'h2', 'h3', 'h4', 'h5']

class HighlightedMarkdown extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    className: PropTypes.string,
  }

  onIterate = (tag, props, children) => {
    if (tag === 'a') return <A {...props} page={this.props.page}>{children}</A>
    if (tag === 'code') return <Code lang={props['data-language']} text={children[0]} />
    // React throws if children are passed to img.
    if (tag === 'img') return createElement(tag, props)
    if (headlines.indexOf(tag) !== -1) {
      return <H {...props} tag={tag} sheet={this.props.sheet}>{children}</H>
    }
    return createElement(tag, props, children)
  }

  render() {
    const {sheet: {classes}, className, text} = this.props

    // Server side rendering throws erros.
    // So we need to handle situation when text comes undefined
    if (!text) return <div/>

    return (
      <Markdown
        markdownOptions={markdownOptions}
        className={cn(classes.highlightedMarkdown, className)}
        text={fixGitterBadge(text)}
        onIterate={this.onIterate}
      />
    )
  }
}

export default injectSheet(styles)(HighlightedMarkdown)
