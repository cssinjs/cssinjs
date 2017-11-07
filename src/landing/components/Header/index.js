import React from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'
import {getColorSchemes} from 'common/utils/styles'
import {ucfirst} from 'common/utils/string'
import colorSchemes from 'common/constants/colorScheme'
import GithubWidget from 'common/containers/GithubWidget'
import {repo} from 'common/config'
import theme from 'common/theme'
import {Logo} from 'common/components/icons'
import Container from '../Container'

const styles = theme => ({
  ...getColorSchemes(),
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transform: 'translateZ(0)',
    backfaceVisibility: 'none',
    willChange: 'transform',
    pointerEvents: 'all',
    height: 80
  },
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    height: '70%',
    width: 'auto'
  },
  actions: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
  widget: {
    marginRight: 20,
    fontSize: 15
  }
})

const Header = (props) => {
  const {children, classes, colorScheme} = props
  const color = theme[`color${ucfirst(colorScheme)}`]

  return (
    <div className={cn(classes.header, classes[colorScheme])}>
      <Container className={classes.container}>
        <Logo
          className={classes.logo}
          strokeColor={color}
          textColor={color}
        />
        <div class={classes.actions}>
          <GithubWidget className={classes.widget} repo={repo} />

          Star + GitHub + Button
        </div>
      </Container>
    </div>
  )
}

Header.propTypes = {
  sheet: React.PropTypes.object.isRequired,
  colorScheme: React.PropTypes.oneOf(colorSchemes)
}

export default injectSheet(styles)(Header)
