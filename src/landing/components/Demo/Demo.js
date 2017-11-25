import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import Iframe from 'common/components/Iframe'
import Button from 'common/components/Button'
import Container from '../Container'
import Title from '../Title'
import Text from '../Text'

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
  }
}

const renderDescription = ({classes, inverse, description}) => ( // eslint-disable-line
  <div className={classes.description}>
    <Text inverse={inverse}>
      {description}
    </Text>
  </div>
)

const renderLink = ({classes, inverse, docsUrl}) => ( // eslint-disable-line
  <div className={classes.action}>
    <Button href={docsUrl} inverse={inverse} big>
      See docs
    </Button>
  </div>
)

/**
 * TODO: Load iframe when we scroll in this viewport only
 * Because chrome browser crashed in case of simultaneous iframe load
 */

const Demo = (props) => {
  const {inverse, title, description, demoUrl, docsUrl} = props

  return (
    <Container>
      <Title inverse={inverse}>{title}</Title>
      {description && renderDescription(props)}
      <Iframe src={demoUrl} />
      {docsUrl && renderLink(props)}
    </Container>
  )
}

Demo.propTypes = {
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
