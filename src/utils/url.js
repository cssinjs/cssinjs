import resolve from 'resolve-url'

export const parse = (function parse() {
  const parser = document.createElement('a')

  const components = [
    'hash', 'host', 'hostname', 'href', 'pathname', 'port', 'protocol', 'search'
  ]

  return (url) => {
    const data = {}
    parser.href = encodeURI(url)
    components.forEach((component) => {
      data[component] = parser[component]
    })
    return data
  }
}())

export const isRelative = path => path[0] === '.'

export {resolve}
