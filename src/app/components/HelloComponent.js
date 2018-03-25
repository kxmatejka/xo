import React, { Component } from 'react'

export default class Hello extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.handleClickPlus = this.handleClickPlus.bind(this)
  }

  handleClickPlus() {
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    const {
      message
    } = this.props

    return (
      <div>
        <h1>{ message }!</h1>
        <p>{ this.state.count }</p>
        <button onClick={this.handleClickPlus}>+1</button>
      </div>
    )
  }
}
