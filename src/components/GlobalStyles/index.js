import normalize from 'normalize-jss'

import injectSheet from 'react-jss'

export default injectSheet(normalize, {isolate: false})()
