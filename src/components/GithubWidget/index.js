import React, {PureComponent, PropTypes} from 'react'
import Isvg from 'react-inlinesvg'

import {primaryHost} from '../../constants/github'
import {loadStars} from '../../utils/github'
import injectSheet from '../../utils/jss'
import styles from './styles'

const formatStars = num => String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

/**
 * Component, for displaying link to GitHub repository and stars counter.
 */
class GithubWidget extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired,
    repo: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      stars: -1
    }
  }

  componentDidMount() {
    loadStars(this.props.repo).then((stars) => {
      this.setState({stars})
    })
  }

  render() {
    const {sheet: {classes}} = this.props
    const {stars} = this.state

    return (
      <a
        href={`//${primaryHost}/${this.props.repo}`}
        className={classes.githubWidget}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.item}>
          <Isvg src={'/images/star.svg'} className={classes.iconStar} />
          <span className={classes.text}>
            {formatStars(stars)}
          </span>
        </div>
        <div className={classes.item}>
          <Isvg src={'/images/github.svg'} className={classes.iconGithub} />
          <span className={classes.text}>
            GitHub
          </span>
        </div>
      </a>
    )
  }
}

export default injectSheet(styles)(GithubWidget)
