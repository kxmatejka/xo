import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.hydrate(
  <App message='Hello from client'/>,
  document.getElementById('root')
)
