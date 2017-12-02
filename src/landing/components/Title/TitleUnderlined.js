import injectSheet from 'common/utils/jss'
import Title from './Title'

const styles = theme => ({
  title: {
    color: theme.text.light,
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 24,
    textTransform: 'uppercase',
    letterSpacing: 1,
    margin: [0, 0, 40],
    '&::after': {
      background: theme.text.light,
      content: '""',
      display: 'block',
      height: 3,
      width: 100,
      margin: [10, 'auto', 0],
      opacity: 0.3
    }
  },
  inverse: {
    color: theme.text.dark,
    '&::after': {
      background: theme.text.dark,
    }
  }
})

export default injectSheet(styles)(Title)
