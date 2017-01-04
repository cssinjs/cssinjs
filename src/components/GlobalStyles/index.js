import normalize from 'normalize-jss'

import injectSheet from '../../utils/jss'

const styles = {
  '@import': '"//fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,500i"',
  ...normalize
}

export default injectSheet(styles)(props => props.children)
