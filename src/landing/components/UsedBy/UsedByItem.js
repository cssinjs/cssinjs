import React, {PropTypes} from 'react'
import {scale} from 'css-functions'
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
  <a href={url} target='_blank' className={classes.item}>
    <img src={logo} alt={name} className={classes.img} />
  </a>
)

UsedByItem.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}


export default injectSheet(styles)(UsedByItem)
