// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
  constructor(props) {
    super(props); 

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
  incrementBitRate = () => {
    this.setState({
     settings: {...this.state.settings,
      bitrate: 12 
      }
    })

  }
  incrementResolution = () => {
    this.setState({
      settings: {
        video: {
        resolution: '720p'
        }
      } 
     })
  }

  render() {
    return (<button className="bitrate" onClick={this.incrementBitRate}></button> 
    <button className="resolution" onClick={this.incrementResolution}></button> 
    )}
}


export default YouTubeDebugger