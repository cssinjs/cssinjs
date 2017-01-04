import React, {PropTypes} from 'react'
import cn from 'classnames'
import {Github, Star} from '../icons'

import {primaryHost} from '../../constants/github'
import injectSheet from '../../utils/jss'
import styles from './styles'

const formatStars = num => String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

/**
 * Component, for displaying link to GitHub repository and stars counter.
 */
function GithubWidget(props) {
  const {
    sheet: {classes},
    stars,
    repo
  } = props

  return (
    <a
      href={`//${primaryHost}/${repo}`}
      className={cn(classes.githubWidget, stars && classes.loaded)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={classes.item}>
        <Star className={classes.iconStar} />
        <span className={classes.text}>
          {formatStars(stars)}
        </span>
      </div>
      <div className={classes.item}>
        <Github className={classes.iconGithub} />
        <span className={classes.text}>
          GitHub
        </span>
      </div>
    </a>
  )
}

GithubWidget.propTypes = {
  sheet: PropTypes.object.isRequired,
  repo: PropTypes.string.isRequired,
  stars: PropTypes.number
}

export default injectSheet(styles)(GithubWidget)
