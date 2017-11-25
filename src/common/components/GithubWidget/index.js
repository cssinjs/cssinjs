import React, {PropTypes} from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'
import {numberWithCommas} from 'common/utils/string'
import {Github, Star} from 'common/components/icons'
import {primaryHost} from 'common/constants/github'
import styles from './styles'

/**
 * Component, for displaying link to GitHub repository and stars counter.
 */
function GithubWidget(props) {
  const {classes, stars, repo, className} = props

  return (
    <a
      href={`//${primaryHost}/${repo}`}
      className={cn(classes.githubWidget, stars && classes.loaded, className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={classes.item}>
        <Star className={classes.iconStar} />
        <span className={classes.text}>
          {numberWithCommas(stars)}
        </span>
      </span>
      <span className={classes.item}>
        <Github className={classes.iconGithub} />
        <span className={classes.text}>
          GitHub
        </span>
      </span>
    </a>
  )
}

GithubWidget.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  repo: PropTypes.string.isRequired,
  stars: PropTypes.number,
  className: PropTypes.string
}

GithubWidget.defaultProps = {
  stars: 0,
  className: ''
}

export default injectSheet(styles)(GithubWidget)
