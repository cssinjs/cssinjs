import normalize from 'normalize-jss'
import injectSheet from 'common/utils/jss'

export default injectSheet(normalize, {isolate: false})()
