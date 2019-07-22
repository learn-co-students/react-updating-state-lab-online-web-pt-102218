import React from 'react';

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timesClicked: 0
    }
  }

    handleClick = () => {
      this.setState((prevState, prevProps) => {
        return {timesClicked: prevState.timesClicked + 1}
      }, () => console.log(this.state.timesClicked))
    }

    render() {
      return (
        <div>
          <p>
           
          </p>
          <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        </div>
      )
    }
  }

  export default DigitalClicker;
