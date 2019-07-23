// Code DigitalClicker Component Here

import React from "react";

class DigitalClicker extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      timesClicked: 0
    }
  }
incrementTimesClicked = () => {
  
  const updated = this.state.timesClicked += 1
  debugger 

  this.setState({
    timesClicked: updated 
  }) 
}

  render() {
     return <button onClick={this.incrementTimesClicked}>{this.state.timesClicked}</button>;
  }
}

export default DigitalClicker