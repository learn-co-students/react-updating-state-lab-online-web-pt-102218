// Code YouTubeDebugger Component Here
import React, { Fragment, Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  changeBitRate = () => {
    this.setState({ settings: { ...this.state.settings, bitrate: 12 } });
  };

  changeBitResolution = () => {
    this.setState({
      settings: { ...this.state.settings, video: { resolution: "720p" } }
    });
  };

  render() {
    return (
      <Fragment>
        <button className="bitrate" onClick={this.changeBitRate}>
          bitrate!
        </button>
        <button className="resolution" onClick={this.changeBitResolution}>
          Resolution
        </button>
      </Fragment>
    );
  }
}
