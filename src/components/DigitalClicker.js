// Code DigitalClicker Component Here
import React, { Fragment, Component } from "react";

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }
  render() {
    return (
      <Fragment>
        <label>{this.state.timesClicked}</label>
        <button
          onClick={() =>
            this.setState({ timesClicked: this.state.timesClicked+1 })
          }
        >
        {this.state.timesClicked}
        </button>
      </Fragment>
    );
  }
}
