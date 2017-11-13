import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import {Logo} from 'common/components/icons'
import AnimatedRings from '../AnimatedRings'
import Center from '../Center'

const styles = theme => ({
  home: {
    minHeight: '100vh',
    display: 'flex'
  },
  column: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  left: {
    composes: '$column',
    width: '60%',
    background: theme.backgroundDarkDeep,
    color: theme.textColorDarkDeep,
    padding: 80
  },
  right: {
    composes: '$column',
    width: '40%',
    background: theme.color,
    color: theme.textColorLight,
    justifyContent: 'center',
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
  logo: {
    width: '75%',
    height: 'auto',
    position: 'relative',
    zIndex: 2
  }
})

const Home = (props) => {
  const {classes} = props

  return (
    <div className={classes.home}>
      <div className={classes.left}>
        <AnimatedRings inverse>
          <Center vertical>

            Home section content

          </Center>
        </AnimatedRings>
      </div>
      <div className={classes.right}>
        <AnimatedRings>
          <Center>
            <Logo className={classes.logo} />
          </Center>
        </AnimatedRings>
      </div>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(Home)
