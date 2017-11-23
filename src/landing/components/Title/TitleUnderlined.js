import injectSheet from 'common/utils/jss'
import Title from './Title'

const styles = theme => ({
  title: {
    color: theme.textColorLight,
    textAlign: 'center',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    letterSpacing: 1,
    margin: [0, 0, 40],
    '&::after': {
      background: theme.textColorLight,
      content: '""',
      display: 'block',
      height: 3,
      width: 100,
      margin: [10, 'auto', 0],
      opacity: 0.3
    }
  },
  inverse: {
    color: theme.textColorDark,
    '&::after': {
      background: theme.textColorDark,
    }
  }
})

export default injectSheet(styles)(Title)
