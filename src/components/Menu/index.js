import React from 'react'
import MenuItem from '../MenuItem'

// Import directly config with site structure
import pages from '../../pages'

class Menu extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object
  }

  render() {
    const renderItem = (name, link, realLink, index, isHomepage, haveChildren, children) => {
      if (typeof children === 'object') {
        return (
          <MenuItem
            name={name}
            link={link}
            realLink={realLink}
            haveChildren={haveChildren}
            home={isHomepage}
            key={index}
          >
            {children}
          </MenuItem>
        )
      }
      return (
        <MenuItem
          name={name}
          link={link}
          realLink={realLink}
          haveChildren={haveChildren}
          home={isHomepage}
          key={index}
        />
      )
    }

    const buildMenu = (pagesList) => {
      const menu = []
      let index = 0

      for (const item in pagesList) {
        const name = pagesList[item].name ? pagesList[item].name : ''
        const realLink = pagesList[item].link ? pagesList[item].link : ''
        const isHomepage = pagesList[item].home
        let menuItem

        if (name) {
          if (pagesList[item].child) {
            menuItem = renderItem(
              name,
              item,
              realLink,
              index,
              isHomepage,
              true,
              buildMenu(pagesList[item].child)
            )
          }
          else {
            menuItem = renderItem(
              name,
              item,
              realLink,
              index,
              isHomepage,
              false
            )
          }
          menu.push(menuItem)
          index++
        }
      }
      return menu
    }

    return (
      <div>
        {buildMenu(pages)}
      </div>
    )
  }
}

export default Menu
