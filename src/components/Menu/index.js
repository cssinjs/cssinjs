import React, {PureComponent, PropTypes} from 'react'
import MenuItem from '../MenuItem'

import {tree} from '../../utils/navigation'

export default class Menu extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object
  }

  renderMenu = (root, level = 0) => {
    const menu = []
    let index = 0

    for (const name in root) {
      const page = root[name]

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
    return <nav>{this.renderMenu(tree)}</nav>
  }
}
