import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBit = () => {
    this.setState((prevState, prevProps) => {
    return {
       settings: {
        ...prevState.settings,
        bitrate: 12
      }
    }
    },()=> console.log(this.state.settings))
  }

  handleRes = () => {
    this.setState((prevState, prevProps) => {
      return {
        settings:{ ...this.state.settings,
        video: {
          ...prevState.video,
          resolution: '720p'
        }
      }}
    }, () => console.log(this.state.settings))
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBit}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleRes}>Change Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;