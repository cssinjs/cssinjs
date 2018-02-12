import injectSheet from 'react-jss'

const styles = {
  icon: {
    display: 'inline-block',
    height: '1em',
    maxWidth: '100%',
    userSelect: 'none'
  }
}

export default injectSheet(styles)(props => props.children(props))

