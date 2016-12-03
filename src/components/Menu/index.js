import React from 'react'
import MenuItem from '../MenuItem'

// Import directly config with site structure
import pages from '../../pages'

class Menu extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object
  }

  render() {
    const renderItem = (data) => {
      const children = data.children
      if (typeof children === 'object') {
        return (
          <MenuItem
            name={data.name}
            link={data.link}
            realLink={data.realLink}
            haveChildren={data.haveChildren}
            home={data.isHomepage}
            external={data.isExternal}
            key={data.index}
          >
            {children}
          </MenuItem>
        )
      }
      return (
        <MenuItem
          name={data.name}
          link={data.link}
          realLink={data.realLink}
          haveChildren={data.haveChildren}
          home={data.isHomepage}
          external={data.isExternal}
          key={data.index}
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
        const isExternal = pagesList[item].external
        let menuItem

        if (name) {
          if (pagesList[item].child) {
            menuItem = renderItem({
              name,
              realLink,
              index,
              isHomepage,
              isExternal,
              haveChildren: true,
              children: buildMenu(pagesList[item].child),
              link: item
            })
          }
          else {
            menuItem = renderItem({
              name,
              realLink,
              index,
              isHomepage,
              isExternal,
              haveChildren: false,
              link: item
            })
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
