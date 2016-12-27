import React, {Component} from 'react'
import 'whatwg-fetch' // eslint-disable-line
import Content from '../components/Content'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function loadContent(url) {
  return fetch(url)
    .then(checkStatus)
    .then(response => response.text())
    .catch((error) => {
      // eslint-disable-next-line
      console.error(`Request failed. Something went wrong with Github API or url passed to component. ERROR: ${error}`)
    })
}

export default class ContentContainer extends Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired
  }

  /**
   * Class constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }
  }

  componentDidMount() {
    loadContent(this.props.url).then((content) => {
      this.setState({content})
    })
  }

  /**
   * React component render
   */
  render() {
    return <Content {...this.props} content={this.state.content} />
  }
}
