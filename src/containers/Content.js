import React, {PureComponent, PropTypes} from 'react'
import Content from '../components/Content'
import {userContentUrl, org} from '../constants/github'

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

const getUrl = (repo, version, path) => (
  `${userContentUrl}/${org}/${repo}/${version}/${path}`
)

export default class ContentContainer extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    repo: PropTypes.string,
    path: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      url: props.url
    }
  }

  componentWillMount() {
    loadContent(this.props.url).then((content) => {
      this.setState({content})
    })
  }

  onChangeVersion = ({value}) => {
    const {repo, path} = this.props
    const url = getUrl(repo, value, path)
    loadContent(url).then((content) => {
      this.setState({url, content})
    })
  }

  render() {
    return (
      <Content
        {...this.props}
        content={this.state.content}
        onChangeVersion={this.onChangeVersion}
      />
    )
  }
}
