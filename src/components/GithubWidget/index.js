import React, {PureComponent, PropTypes} from 'react'
import Isvg from 'react-inlinesvg'

import {apiDomain, primaryDomain} from '../../constants/github'
import jssPreset from '../../helpers/jssPreset'
import styles from './styles'

/*
 * Helper function for adding commas to number
 * @param {number} original number
 * @return {string} stringlifyed number with commas
 */
const addCommasToNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

/**
 * Component, for displaying link to GitHub repository and stars counter.
 */
class GithubWidget extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    repo: PropTypes.string.isRequired
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
      stars: -1
    }
  }

  componentDidMount() {
    // Fetch stars count through GitHub API
    fetch(`//${apiDomain}/repos/${this.props.repo}`)
      .then(this.checkStatus)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          stars: addCommasToNum(data.stargazers_count)
        })
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(`Request failed. Something went wrong with Github API or url passed to component. ERROR: ${error}`)
      })
  }

  /**
   * React component render
   */
  render() {
    const {classes} = this.props.sheet

    return (
      <a
        href={`//${primaryDomain}/${this.props.repo}`}
        className={(this.state.stars === -1) ? classes.containerHidden : classes.container}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.item}>
          <Isvg src={'images/star.svg'} className={classes.iconStar} />
          <span className={classes.text}>
            {this.state.stars}
          </span>
        </div>
        <div className={classes.item}>
          <Isvg src={'images/github.svg'} className={classes.iconGithub} />
          <span className={classes.text}>
            GitHub
          </span>
        </div>
      </a>
    )
  }
}

export default jssPreset(styles)(GithubWidget)
