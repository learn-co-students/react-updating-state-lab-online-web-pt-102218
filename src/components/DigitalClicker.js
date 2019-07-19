import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    }
    this.moreClicks= this.moreClicks.bind(this)
  }

  moreClicks() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <button onClick={this.moreClicks}>{this.state.timesClicked}</button>
    )
  }
}
