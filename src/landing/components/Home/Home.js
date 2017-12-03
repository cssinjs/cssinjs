import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import transparentize from 'polished/lib/color/transparentize'
import {Logo} from 'common/components/icons'
import {mediaMd, mediaSm} from 'common/constants/media'
import Rings from '../AnimatedRings'
import Center from '../Center'
import Title from './Title'

const styles = theme => ({
  home: {
    minHeight: '100vh',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    background: theme.background.darkDeep,
    color: theme.text.darkDeep,
  },
  column: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  content: {
    composes: '$column',
    width: '100%',
    zIndex: 5,
    padding: 80,
    background: transparentize(0.2, theme.background.darkDeep),
    marginRight: '40%'
  },
  sceneHolder: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '40%',
  },
  overlay: {
    composes: '$sceneHolder',
    background: theme.brand,
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 1,
      height: 1,
      background: '#fff',
      opacity: 0.5,
      boxShadow: {
        blur: 150,
        spread: 150,
        color: '#fff'
      }
    }
  },
  holder: {
    composes: ['$column', '$sceneHolder'],
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    background: 'transparent',
    justifyContent: 'center',
    zIndex: 10
  },
  logo: {
    maxWidth: 300,
    width: '60%',
    height: 'auto',
    position: 'relative',
  },
  rings: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
    opacity: 0.25
  },
  [mediaMd]: {
    home: {
      flexDirection: 'column',
      minHeight: 0,
    },
    scene: {
      position: 'relative',
      height: 400,
    },
    sceneHolder: {
      left: 0,
      width: '100%',
    },
    content: {
      margin: 0,
    },
  },
  [mediaSm]: {
    content: {
      padding: [40, 20],
    },
  }
})

const Home = (props) => {
  const {classes} = props

  return (
    <div className={classes.home}>
      <Rings className={classes.rings} />
      <div className={classes.scene}>
        <div className={classes.overlay} />
        <div className={classes.holder}>
          <Logo className={classes.logo} />
        </div>
      </div>
      <div className={classes.content}>
        <Center vertical>
          <Title />
        </Center>
      </div>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired
}

export default injectSheet(styles)(Home)
