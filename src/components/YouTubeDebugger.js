import React, { Component } from 'react'

export default class YoutubeDebugger extends Component {
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
    this.increaseBitrate= this.increaseBitrate.bind(this)
    this.changeResolution= this.changeResolution.bind(this)

  }

  increaseBitrate() {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeResolution() {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }


  render() {
    return (
      <div>
        <button className='bitrate'onClick={this.increaseBitrate}>Bitrate</button>,
        <button className='resolution' onClick={this.changeResolution}>Resolution</button>
      </div>
    )
  }
}
