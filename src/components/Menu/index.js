import React, {PureComponent, PropTypes} from 'react'
import MenuItem from '../MenuItem'

import pages from '../../pages'

export default class Menu extends PureComponent {
  static propTypes = {
    sheet: PropTypes.object
  }

  renderMenu = (root) => {
    const menu = []
    let index = 0

    for (const name in root) {
      const page = {...root[name], name}
      if (page.children) {
        page.children = this.renderMenu(page.children)
      }
      menu.push(<MenuItem {...page} key={index} />)

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
