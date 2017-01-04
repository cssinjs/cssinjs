import normalize from 'normalize-jss'

import injectSheet from '../../utils/jss'

const global = normalize['@global']

const styles = {
  '@import': '"//fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,500i"',
  '@global': {
    ...global,
    html: {
      extend: global.html,
      fontSize: '62.5%',
    },
    body: {
      extend: global.body,
    }
  }
}

export default injectSheet(styles)(props => props.children)
