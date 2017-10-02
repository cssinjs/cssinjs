import React, {PureComponent, PropTypes} from 'react'
import injectSheet from 'common/utils/jss'

import MenuItem from '../MenuItem'
import {tree} from '../../utils/navigation'
import styles from './styles'

class Menu extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object.isRequired
  }

  renderMenu = (root, level = 0) => {
    const menu = []
    let index = 0

    for (const name in root) {
      const page = root[name]

      if (page.hidden) continue

      menu.push(
        <MenuItem
          {...page}
          name={name}
          key={index}
          level={level}
        />
      )

      if (page.children) menu.push(this.renderMenu(page.children, level + 1))

      index++
    }

    return menu
  }

  render() {
    const {classes} = this.props.sheet

    return <nav className={classes.menu}>{this.renderMenu(tree)}</nav>
  }
}

export default injectSheet(styles)(Menu)
