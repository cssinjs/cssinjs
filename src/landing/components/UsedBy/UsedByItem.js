import React, {PropTypes} from 'react'
import injectSheet from 'common/utils/jss'
import {transition} from 'common/utils/styles'

const styles = {
  item: {
    display: 'inline-block',
    verticalAlign: 'middle',
    padding: [20, 0],
    margin: [0, -20],
    transition: transition(),
    '&:hover': {
      opacity: 0.5,
      filter: 'grayscale(100)',
    }
  },
  img: {
    width: '70%',
    height: 'auto',
  }
}

const UsedByItem = ({classes, name, logo, url}) => (
  <a
    href={url}
    className={classes.item}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={logo} alt={name} className={classes.img} />
  </a>
)

UsedByItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}


export default injectSheet(styles)(UsedByItem)
