import React, {PureComponent, PropTypes, createElement} from 'react'
import Markdown from 'markdown-react-js'

import Code from './Code'
import A from './A'

// There was a wrong formatted image url in all our .md files, now its fixed
// but we still need to support older versions.
const fixGitterBadge = text => text.replace(/Join Chat\.svg/g, 'JoinChat.svg')

export default class HighlightedMarkdown extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    page: PropTypes.string.isRequired
  }

  onIterate = (tag, props, children) => {
    if (tag === 'a') return <A {...props} page={this.props.page}>{children}</A>
    if (tag === 'code') return <Code lang={props['data-language']} text={children[0]} />
    // React throws if children are passed to img.
    if (tag === 'img') return createElement(tag, props)
    return createElement(tag, props, children)
  }

  render() {
    const {className, text} = this.props

    return (
      <Markdown
        className={className}
        text={fixGitterBadge(text)}
        onIterate={this.onIterate}
      />
    )
  }
}
