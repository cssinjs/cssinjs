import React, {PureComponent, PropTypes} from 'react'
import MenuItem from '../MenuItem'

import pages from '../../pages'

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
        >
          {page.children && this.renderMenu(page.children, level + 1)}
        </MenuItem>
      )

      index++
    }

    return menu
  }

  render() {
    return (
      <div>
        {this.renderMenu(pages)}
      </div>
    )
  }
}
