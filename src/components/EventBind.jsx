import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messgae: "hello ",
    };
    this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   console.log(this);
  //   this.setState({ messgae: "heeeeo" });
  // }
  clickHandler = () => {
    console.log(this);
    this.setState({ messgae: "heeeeo" });
  };

  render() {
    return (
      <div>
        <h2>{this.state.messgae}</h2>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        <button onClick={this.clickHandler}>click</button>
      </div>
    ); 
  }
}

export default EventBind;



// bind in three ways 
// bind in constructor
// bind in inline 
// bind in arrow function