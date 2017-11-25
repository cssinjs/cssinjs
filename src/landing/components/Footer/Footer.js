import React, {PropTypes} from 'react'
import darken from 'polished/lib/color/darken'
import injectSheet from 'common/utils/jss'
import Container from '../Container'

const coreTeamUrl = 'https://github.com/orgs/cssinjs/people'

const styles = (theme) => {
  const textColor = darken(0.3, theme.textColorDark)
  return {
    footer: {
      padding: [20, 0],
      fontSize: 14,
      textAlign: 'center',
      color: textColor,
      background: darken(0.08, theme.backgroundDark),
    },
    link: {
      padding: [0, 5],
      color: textColor,
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'none'
      }
    }
  }
}

const Footer = ({classes}) => (
  <div className={classes.footer}>
    <Container>
      Made with love by
      <a
        className={classes.link}
        href={coreTeamUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        JSS Core team
      </a>
    </Container>
  </div>
)

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired
}

export default injectSheet(styles)(Footer)
