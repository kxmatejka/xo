import React, { Fragment, PureComponent } from 'react'
import styled from 'styled-components'

const Headline = styled.h1`
  color: #3183ff;
`

const Counter = styled.p`
  display: inline-block;
  margin-right: 10px;
`

const IncrementButton = styled.button`
  color: #4a4a4a;
  background: #eeeeee;
  padding: 5px 10px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(1.10);
    border: 1px solid #b4b4b4;
  }
`

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
        <Headline>{ message }!</Headline>
        <Counter>state: { count }</Counter>
        <IncrementButton onClick={this.handleClickPlus}>++</IncrementButton>
      </Fragment>
    )
  }
}
