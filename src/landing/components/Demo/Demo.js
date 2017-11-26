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
    marginBottom: 40
  },
  action: {
    marginTop: 40,
    display: 'flex',
    alignItems: 'center'
  },
  centered: {
    composes: '$action',
    justifyContent: 'center'
  },
  layout: {
    display: 'flex',
    alignItems: 'center'
  },
  left: {
    textAlign: 'left',
    flexShrink: 0,
    width: '30%',
    marginRight: 60
  },
  right: {
    flexGrow: 1,
  },
  // Use as overlay until iframe will be rendered
  demo: {
    height: '100vh',
    background: rgba(0, 0, 0, 0.2)
  }
}

const renderDescription = (classes, inverse, description, muted, centered) => (
  <div className={classes.description}>
    <Text inverse={inverse} narrow muted={muted} centered={centered}>
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

const renderLink = (classes, inverse, docsUrl, centered) => (
  <div className={centered ? classes.centered : classes.action}>
    <Button href={docsUrl} inverse={inverse} big>
      {button.docs}
    </Button>
  </div>
)

const Demo = (props) => {
  const {classes, inverse, title, description, demoUrl, docsUrl, columnLayout} = props

  if (columnLayout) {
    return (
      <div className={classes.layout}>
        <div className={classes.left}>
          <Title inverse={inverse} small>{title}</Title>
          {description && renderDescription(classes, inverse, description)}
          {docsUrl && renderLink(classes, inverse, docsUrl)}
        </div>
        <div className={classes.right}>
          {renderDemo(classes, demoUrl)}
        </div>
      </div>
    )
  }

  /**
   * TODO: Move CONTAINER to separated component
   * like ContainerSection (as comonent on top of Section that adds container)
   */
  return (
    <Container>
      <Title inverse={inverse} centered>{title}</Title>
      {description && renderDescription(classes, inverse, description, true, true)}
      {renderDemo(classes, demoUrl)}
      {docsUrl && renderLink(classes, inverse, docsUrl, true)}
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
  columnLayout: PropTypes.bool,
}

Demo.defaultProps = {
  inverse: false,
  columnLayout: false,
  description: null,
  docsUrl: null,
}

export default injectSheet(styles)(Demo)
