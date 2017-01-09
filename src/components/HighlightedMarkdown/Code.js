import React, {PureComponent, PropTypes} from 'react'
import {highlightElement} from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-bash'

export default class Code extends PureComponent {
  static propTypes = {
    lang: PropTypes.string,
    text: PropTypes.string
  }

  componentDidMount() {
    const {lang, text} = this.props
    this.code.textContent = text
    if (lang) highlightElement(this.code)
  }

  onRef = (ref) => {
    this.code = ref
  }

  render() {
    // Fix the difference between github and prism syntax highlighting
    const lang = this.props.lang === 'es6' ? 'javascript' : this.props.lang

    return <code ref={this.onRef} className={`language-${lang}`} />
  }
}
