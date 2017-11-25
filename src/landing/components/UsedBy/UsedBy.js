import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import Item from './UsedByItem'
import Container from '../Container'
import {TitleUnderlined} from '../Title'

const styles = {
  content: {
    textAlign: 'center'
  }
}

const UsedBy = ({classes, inverse, companies}) => (
  <Container>
    <TitleUnderlined inverse={inverse}>
      Used by folks at
    </TitleUnderlined>
    <div className={classes.content}>
      {companies.map((item) => <Item {...item} />)}
    </div>
  </Container>
)

UsedBy.propTypes = {
  classes: PropTypes.object.isRequired,
  companies: PropTypes.array,
  inverse: PropTypes.bool,
}

UsedBy.defaultProps = {
  inverse: false,
  companies: [],
}

export default injectSheet(styles)(UsedBy)
