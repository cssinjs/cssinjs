import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import Item from './UsedByItem'
import {TitleUnderlined} from '../Title'
import {title} from '../../texts'

const styles = {
  content: {
    textAlign: 'center',
    margin: [-20, 0]
  }
}

const UsedBy = ({classes, inverse, companies}) => (
  <div>
    <TitleUnderlined inverse={inverse}>
      {title.usedBy}
    </TitleUnderlined>
    <div className={classes.content}>
      {companies.map(item => <Item {...item} />)}
    </div>
  </div>
)

UsedBy.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  companies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  inverse: PropTypes.bool,
}

UsedBy.defaultProps = {
  inverse: false,
  companies: [],
}

export default injectSheet(styles)(UsedBy)
