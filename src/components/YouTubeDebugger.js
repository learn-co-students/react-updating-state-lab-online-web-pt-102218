// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {

  constructor() {
    super();

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

  fixResolution = () => {
    this.setState(
      {
        ...this.state,
        settings: {
          ...this.state.settings,
          video: {
            resolution: "720p"
          }
        }
      },
      () => console.log(this.state)
    )
  }

  fixBitrate = () => {
    this.setState(
      {
        ...this.state,
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      },
      () => console.log(this.state)
    )
  }


  render() {
    return (
      <div className="buttons">
        <button className="bitrate" onClick={this.fixBitrate}>Fix Bitrate</button>
        <br />
        <button className="resolution" onClick={this.fixResolution}>Fix Resolution</button>
      </div>
    )
  }
}