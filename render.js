const fs = require('fs')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const app = require('./build/server.bundle').default

const ENCODING = 'utf8'
const INPUT_FILE = 'index.html'
const OUTPUT_FILE = 'build/index.html'

function AppToString() {
  return new Promise(resolve => {
    const appElement = React.createElement(app, {
      message: 'Hello from server'
    })

    return resolve( ReactDOMServer.renderToString(appElement))
  })
}

function RenderToHtml(htmlString) {
  return new Promise((resolve, reject) => {
    fs.readFile(INPUT_FILE, ENCODING, (err, data) => {
      if (err) {
        return reject(err)
      }

      return resolve(data.replace(
        '<div id="root"></div>',
        `<div id="root">${htmlString}</div>`
      ))
    })
  })
}

function WriteToFile(resultHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(OUTPUT_FILE, resultHtml, ENCODING, err => {
      if (err) {
        return reject(err)
      }

      return resolve()
    })
  })
}

AppToString().then(htmlString => {
  return RenderToHtml(htmlString)
}).then(resultHtml => {
  return WriteToFile(resultHtml)
}).then(() => {
  console.log(`${OUTPUT_FILE} successfully created`)
})
