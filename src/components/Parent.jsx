import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"vishwas"
        }
        
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(val) {
        console.log("parent greeted :",val)
    }
    
  render() {
    return (
      <div>
        <Child  handleParent = {this.greetParent} />
      </div>
    )
  }
}

export default Parent
