import React from 'react'
import MenuItem from '../MenuItem'

import pages from '../../pages'

/**
 * Menu builder component
 * @extends React.Component
 */
class Menu extends React.Component {
  static propTypes = {
    sheet: React.PropTypes.object
  }

  /**
   * React component render
   */
  render() {
    /**
     * Single item render hepler
     * @param {Object} data Collection of data that need to be rendered
     * @param {string} data.name Name, that will be displayed on menu item
     * @param {string} data.link Internal router link
     * @param {string} data.realLink Real external links from where data will be fetched
     * @param {boolean} data.haveChildren Have child menus or not
     * @param {Object} data.children Collection of childrens
     * @param {boolean} data.home Is current link a homepage
     * @param {boolean} data.external Is current link go to external resources
     * @param {number} data.key Just unique number
     */
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

    /**
     * Recursive method for building entire menu with childrens
     * @param {Object} Site structure (currently contained in pages.json)
     */
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
