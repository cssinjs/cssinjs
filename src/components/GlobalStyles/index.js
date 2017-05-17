import normalize from 'normalize-jss'

import injectSheet from '../../utils/jss'

export default injectSheet(normalize, {isolate: false})()
