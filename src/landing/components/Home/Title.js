import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import {transition} from 'common/utils/styles'
import Arrow from 'common/components/icons/Arrow'
import ScrollDown from 'common/components/ScrollDown'

const styles = theme => ({
  title: {
    color: theme.textColorDarkDeep,
  },
  main: {
    composes: '$title',
    maxWidth: 500,
    margin: [0, 0, 40],
    font: {
      size: theme.fontSize * 2.5,
      weight: 'normal'
    },
  },
  secondary: {
    composes: '$title',
    maxWidth: 350,
    margin: [0, 0, 40],
    font: {
      size: theme.fontSize * 1.2,
      weight: 'normal'
    },
  },
  icon: {
    fill: theme.textColorDarkDeep,
    height: 45,
    cursor: 'pointer',
    transition: transition(),
    '&:hover': {
      cursor: 'inherit',
      opacity: 0.5
    }
  }
})

const Title = (props) => {
  const {classes} = props

  return (
    <div className={classes.title}>
      <h1 className={classes.main}>
        An authoring tool for <b>CSS</b> which uses <b>JavaScript</b> as a host language
      </h1>
      <h2 className={classes.secondary}>
        It is a high performance JS to CSS compiler which works at runtime and server-side.
      </h2>
      <ScrollDown>
        <Arrow className={classes.icon} />
      </ScrollDown>
    </div>
  )
}

Title.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired
}

export default injectSheet(styles)(Title)
