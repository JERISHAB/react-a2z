import React, { Component } from 'react'

export class Child extends Component {
  render() {

    console.log("inside child")
    return (
      <div>
        <button onClick={ () => this.props.handleParent('jersy')} ></button>
      </div>
    )
  }
}

export default Child