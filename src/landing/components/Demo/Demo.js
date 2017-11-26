import React, {PropTypes} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {rgba} from 'css-functions'
import injectSheet from 'common/utils/jss'
import Iframe from 'common/components/Iframe'
import Button from 'common/components/Button'
import Container from '../Container'
import Title from '../Title'
import Text from '../Text'
import {button} from '../../texts'

const styles = {
  description: {
    isolate: false,
    maxWidth: 750,
    margin: [0, 'auto', 60]
  },
  action: {
    marginTop: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // Use as overlay until iframe will be rendered
  demo: {
    height: '100vh',
    background: rgba(0, 0, 0, 0.2)
  }
}

const renderDescription = (classes, inverse, description) => (
  <div className={classes.description}>
    <Text inverse={inverse}>
      {description}
    </Text>
  </div>
)

const renderDemo = (classes, demoUrl) => (
  <div className={classes.demo}>
    <VisibilitySensor>
      {({isVisible}) => {
        if (isVisible) {
          return <Iframe src={demoUrl} />
        }
        return <div />
      }}
    </VisibilitySensor>
  </div>
)

const renderLink = (classes, inverse, docsUrl) => (
  <div className={classes.action}>
    <Button href={docsUrl} inverse={inverse} big>
      {button.docs}
    </Button>
  </div>
)

const Demo = (props) => {
  const {classes, inverse, title, description, demoUrl, docsUrl} = props

  return (
    <Container>
      <Title inverse={inverse}>{title}</Title>
      {description && renderDescription(classes, inverse, description)}
      {renderDemo(classes, demoUrl)}
      {docsUrl && renderLink(classes, inverse, docsUrl)}
    </Container>
  )
}

Demo.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired,
  docsUrl: PropTypes.string,
  description: PropTypes.string,
  inverse: PropTypes.bool,
}

Demo.defaultProps = {
  inverse: false,
  description: null,
  docsUrl: null
}

export default injectSheet(styles)(Demo)
