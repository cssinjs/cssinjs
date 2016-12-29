import React, {PureComponent, PropTypes} from 'react'
import Isvg from 'react-inlinesvg'

import {primaryDomain} from '../../constants/github'
import {loadStars} from '../../utils/github'
import injectSheet from '../../utils/jss'
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
    loadStars(this.props.repo).then((stars) => {
      this.setState({stars: addCommasToNum(stars)})
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

export default injectSheet(styles)(GithubWidget)
