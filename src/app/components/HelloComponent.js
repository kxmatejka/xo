import React, { Fragment, PureComponent } from 'react'

export default class HelloComponent extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    this.handleClickPlus = this.handleClickPlus.bind(this)
  }

  handleClickPlus() {
    this.setState(state => ({count: state.count + 1}))
  }

  render() {
    const {
      props: {
        message
      },
      state: {
        count
      }
    } = this

    return (
      <Fragment>
        <h1>{ message }!</h1>
        <p>{ count }</p>
        <button onClick={this.handleClickPlus}>+1</button>
      </Fragment>
    )
  }
}
