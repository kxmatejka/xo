import React from 'react'
import { hot } from 'react-hot-loader'
import HelloComponent from 'app/components/HelloComponent'

const App = props => (<HelloComponent {...props}/>)

export default hot(module)(App)
