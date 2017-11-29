import React, {PropTypes} from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'
import {numberWithCommas} from 'common/utils/string'
import {transition} from 'common/utils/styles'
import {Github, Star} from 'common/components/icons'
import {primaryHost} from 'common/constants/github'

const styles = theme => ({
  githubWidget: {
    color: ({inverse}) => (inverse ? theme.textColorDark : theme.textColorLight),
    opacity: ({stars}) => (stars ? 1 : 0),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 400,
    transition: transition(),
    '&:hover': {
      isoalte: false,
      opacity: 0.7
    }
  },
  item: {
    color: 'currentColor',
    marginLeft: 20,
    textAlign: 'center',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    MsFlexPack: 'center', // Fix of justify-content for IE10
    maxHeight: 50, // Fix for IE10
    '&:first-child': {
      isolate: false,
      marginLeft: 0
    }
  },
  text: {
    color: 'currentColor',
    lineHeight: 5
  },
  icon: {
    color: 'currentColor',
    fill: 'currentColor',
    margin: {
      top: -3,
      right: 8
    }
  },
  iconStar: {
    extend: 'icon',
    fill: theme.color,
  },
  iconGithub: {
    extend: 'icon',
    fill: 'currentColor',
  }
})

function GithubWidget(props) {
  // const {classes, stars, repo, className, inverse} = props
  const {classes, stars, repo, className} = props

  return (
    <a
      href={`//${primaryHost}/${repo}`}
      className={cn(classes.githubWidget, className)}
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
  className: PropTypes.string,
  inverse: PropTypes.bool, // eslint-disable-line
}

GithubWidget.defaultProps = {
  stars: 0,
  className: '',
  inverse: false,
}

export default injectSheet(styles)(GithubWidget)
