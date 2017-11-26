import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import Title from '../Title'
import Text from '../Text'
import {title, text} from '../../texts'

// TODO: Move to inner container
import Demo from '../Demo'
import {jss} from '../../demos'
// import {jss, reactJss, styledJss} from '../../demos'

// TODO: If styles are not needed - remove them.
// Move block to containers
// And remove injectSheet
const styles = {

}

// TODO: Move this inside tabs
const renderSingleItem = () => (
  <Demo {...jss} columnLayout />
)

const Abstractions = ({classes, inverse}) => (
  <div>
    <Title inverse={inverse} centered>{title.abstractions}</Title>
    <Text inverse={inverse} muted narrow centered>{text.abstractions}</Text>

    {renderSingleItem()}

  </div>
)

Abstractions.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  inverse: PropTypes.bool
}

Abstractions.defaultProps = {
  inverse: false
}

export default injectSheet(styles)(Abstractions)
