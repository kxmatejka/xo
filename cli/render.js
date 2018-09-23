const fs = require('fs')
const React = require('react')
const { renderToString } = require('react-dom/server')
const { ServerStyleSheet } = require('styled-components')
const app = require('../build/server.bundle').default

const ENCODING = 'utf8'
const INPUT_FILE = 'index.html'
const OUTPUT_FILE = 'build/index.html'

function appToString() {
  return new Promise(resolve => {
    const appElement = React.createElement(app, {
      message: 'Hello from server'
    })

    const sheet = new ServerStyleSheet()
    const html = renderToString(sheet.collectStyles(appElement))
    const style = sheet.getStyleTags()

    return resolve({
      html,
      style
    })
  })
}

function renderToHtml(rendered) {
  return new Promise((resolve, reject) => {
    fs.readFile(INPUT_FILE, ENCODING, (error, data) => {
      if (error) {
        return reject(error)
      }

      return resolve(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${rendered.html}</div>`
        ).replace(
          '<style></style>',
          rendered.style
        )
      )
    })
  })
}

function writeToFile(resultHtml) {
  return new Promise((resolve, reject) => {
    fs.writeFile(OUTPUT_FILE, resultHtml, ENCODING, error => {
      if (error) {
        return reject(error)
      }

      return resolve()
    })
  })
}

function cleanUp() {
  return new Promise((resolve, reject) => {
    fs.unlink('./build/server.bundle.js', error => {
      if (error) {
        return reject(error)
      }

      return resolve()
    })
  })
}

appToString().then(htmlString => {
  return renderToHtml(htmlString)
}).then(resultHtml => {
  return writeToFile(resultHtml)
}).then(() => {
  return cleanUp()
}).then(() => {
  console.log(`${OUTPUT_FILE} successfully created`)
}).catch(error => {
  console.error(`rendering failed: ${error}`)
  process.exit(1)
})
