import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import Container from '../Container'
import {TitleUnderlined} from '../Title'

const styles = {
  content: {
    textAlign: 'center'
  }
}

const UsedBy = ({classes, inverse}) => (
  <Container>
    <TitleUnderlined inverse={inverse}>
      Used by folks at
    </TitleUnderlined>
    <div className={classes.content}>

      {'>> USED BY'}

    </div>
  </Container>
)

UsedBy.propTypes = {
  classes: PropTypes.object.isRequired,
  inverse: PropTypes.bool,
}

UsedBy.defaultProps = {
  inverse: false
}

export default injectSheet(styles)(UsedBy)
