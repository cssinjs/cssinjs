import {animateScroll} from 'react-scroll'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-css.min.js'
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-bash.min.js'

const GITHUB_URL = 'github.com'
const GITHUB_RAW_URL = 'raw.githubusercontent.com'
const ANCHOR_NAME = 'internalAnchor'

/**
 * Create edit link for current GitHub page
 * @param {string} original link
 * @returns {string} processed link
 */
export function getEditLink(link) {
  // TODO: Find a needed position by 'master' branch.
  // It doesn'n work if branch will be not in master branch
  const insertPosition = link.indexOf('/master')
  link = `${link.slice(0, insertPosition)}/blob${link.slice(insertPosition, link.length)}`
  return link.replace(GITHUB_RAW_URL, GITHUB_URL).replace()
}


/**
 * Achor click handler. On click must scroll to needed target
 * @param {Object} event passed from original listener
 */
export function onAnchorClick(e) {
  const el = e.target

  if (el.getAttribute('ref') === ANCHOR_NAME) {
    e.preventDefault()
    const target = el.querySelector(`${el.getAttribute('href')}-`)
    if (target) {
      animateScroll.scrollTo(target.offsetTop)
    }
  }
}

/**
 * Modify each <code> tags adding code highlighting
 * @param {HTMLElement} markup, that need to be processed
 * @returns {HTMLElement} processed markup
 */
export function processCode(content) {
  // Because nodeList doesn't support forEach
  [...content.querySelectorAll('code')].forEach((block) => {
    Prism.highlightElement(block)
  })
  return content
}

/**
 * Modify each <a> tag to fit internal structure
 * @param {HTMLElement} markup, that need to be processed
 * @returns {HTMLElement} processed markup
 */
export function processLinks(content, links, externalLinks, url) {
  // Because nodeList doesn't support forEach
  [...content.querySelectorAll('a')].forEach((link) => {
    // Convert github link to RAW format and compare with internal pages structure
    let href = link.getAttribute('href')
    let endingAnchor = ''

    // For situation when we have link with anchor.
    // Store anchor in variable, leave link without anchor
    // If link isn't internal - return acnhor back (see below)
    if (!href.startsWith('#') && href.includes('#')) {
      href = href.split('#')
      // TODO: Handle in some way internal links with anchors e.g. '#/plugins#anchor'
      endingAnchor = `${href[1]}`
      href = href[0]
    }

    if (href.indexOf(GITHUB_URL) > -1) {
      href = href.replace(GITHUB_URL, GITHUB_RAW_URL).replace('blob/', '')
      // Suppose, if page end without .md - isn't direct link to something
      if (!href.endsWith('.md')) {
        // Try to resolve link (just adding 'readme.md' to end of it)
        // Because somewhere there are uppercased names, somewhere - lowercased :(
        if (links[`${href}/master/readme.md`]) {
          link.setAttribute('href', `#/${links[`${href}/master/readme.md`]}`)
        }
        if (links[`${href}/master/README.md`]) {
          link.setAttribute('href', `#/${links[`${href}/master/README.md`]}`)
        }
        return
      }
    }

    // Internal navigation inside repo
    if (href.startsWith('./')) {
      const startUrl = url.substring(0, url.lastIndexOf('/'))
      const endUrl = href.substr(1)
      href = startUrl + endUrl
    }

    // Link is inside internal structure but set external
    if (externalLinks[links[href]]) {
      link.setAttribute('target', '_blank')
      return
    }

    // If is in internal structure - change url to fit it
    if (links[href]) {
      link.setAttribute('href', `#/${links[href]}`)
      return
    }

    // If is internal anchor
    if (href.startsWith('#')) {
      link.setAttribute('ref', ANCHOR_NAME)
      return
    }

    // No options - is extenral link open in new window
    link.setAttribute('target', '_blank')
    // Return back ending anchor
    link.setAttribute('href', `${href}#${endingAnchor}`)
  })

  return content
}
