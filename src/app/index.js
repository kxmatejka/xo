import React from 'react'
import { hot } from 'react-hot-loader'
import { HelloComponent } from './components/HelloComponent'

const App = props => (<HelloComponent message={props.message}/>)

export default hot(module)(App)
