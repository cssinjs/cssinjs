import React, {PureComponent, PropTypes, createElement} from 'react'
import Markdown from 'markdown-react-js'

import Code from './Code'

export default class HighlightedMarkdown extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string
  }

  onIterate = (tag, props, children) => {
    if (tag === 'code') return <Code lang={props['data-language']} text={children[0]} />
    return createElement(tag, props, children)
  }

  render() {
    const {className, text} = this.props
    return (
      <Markdown
        className={className}
        text={text}
        onIterate={this.onIterate}
      />
    )
  }
}
