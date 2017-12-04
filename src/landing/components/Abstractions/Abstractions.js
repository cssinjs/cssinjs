import React, {PureComponent, PropTypes} from 'react'
import SwipeableViews from 'react-swipeable-views'
import Tabs, {Tab} from 'common/components/Tabs'
import injectSheet from 'common/utils/jss'
import {transition} from 'common/utils/styles'
import Title from '../Title'
import Text from '../Text'
import Demo from '../Demo'
import {title, text} from '../../texts'
import {jss, reactJss, styledJss} from '../../demos'

class Abstractions extends PureComponent {

  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    inverse: PropTypes.bool,
  }

  static defaultProps = {
    inverse: false,
  }

  constructor(props) {
    super(props)
    this.demos = [jss, reactJss, styledJss]
    this.state = {
      index: 0,
    }
  }

  handleChange = (event, index) => {
    this.setState({index})
  }

  handleChangeIndex = (index) => {
    this.setState({index})
  }

  renderTabs() {
    return this.demos.map(demo => <Tab>{demo.title}</Tab>)
  }

  renderTabsContent() {
    const {classes} = this.props
    return this.demos.map(demo => (
      <div className={classes.item}>
        <Demo {...demo} columnLayout />
      </div>
    ))
  }

  render() {
    const {inverse, classes} = this.props
    const {index} = this.state

    return (
      <div>
        <Title inverse={inverse} centered>{title.abstractions}</Title>
        <Text inverse={inverse} muted narrow centered>{text.abstractions}</Text>
        <Tabs className={classes.tabs} active={index} onChange={this.handleChange}>
          {this.renderTabs()}
        </Tabs>
        <SwipeableViews
          enableMouseEvents
          animateTransitions
          animateHeight
          index={index}
          onChangeIndex={this.handleChangeIndex}
        >
          {this.renderTabsContent()}
        </SwipeableViews>
      </div>
    )
  }
}

export default injectSheet({
  tabs: {
    marginBottom: 40,
  },
  item: {
    padding: [0, 10],
  }
})(Abstractions)
