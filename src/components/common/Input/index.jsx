import React, { Component } from 'react'

class Input extends Component {
  setValue = e => {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <input value={this.state.value} onChange={this.setValue}/>
    )
  }
}

export default Input