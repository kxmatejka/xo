import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app/app'


ReactDOM.hydrate(
  <AppContainer>
    <App message='Hello from client' />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./app/app', () => {
    ReactDOM.hydrate(
      <AppContainer>
        <App message='Hello from client' />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
