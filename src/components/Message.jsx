import React, { Component } from 'react'

class Message extends Component {
  
    constructor() {
        super()
        this.state = {
            message: 'welocme visitor'
        }
    }

    changeMessage() {
        this.setState({
            message:"thank you for clicking"
        })
    }

    render() {

        function clickHandler() {
            console.log('button clicked')
        }

    return (
      <div>
            <h2>{this.state.message}</h2>
            <button onClick={() => this.changeMessage()} >click me</button>
            <button onClick={clickHandler} >click to print</button>
      </div>
    )
  }
}

export default Message
