import resolve from 'resolve-url'
import isAbsolute from 'is-absolute-url'

export const parse = (function parse() {
  let parser

  const components = [
    'hash', 'host', 'hostname', 'href', 'pathname', 'port', 'protocol', 'search'
  ]

  return (url) => {
    if (!parser) parser = document.createElement('a')
    const data = {}
    parser.href = encodeURI(url)
    components.forEach((component) => {
      data[component] = parser[component]
    })
    return data
  }
}())

export const isRelative = path => path[0] === '.'

export const isHash = slug => slug[0] === '#'

export {
  resolve,
  isAbsolute
}
