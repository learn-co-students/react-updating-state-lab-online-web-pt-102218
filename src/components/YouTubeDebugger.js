// Code YouTubeDebugger Component Here
import React, { Component } from 'react';
class YouTubeDebugger extends Component {
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
         };
         this.handleBit = this.handleBit.bind(this)
         this.handleRes = this.handleRes.bind(this)
    }

    handleBit(){
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
        })
      }
    
      handleRes(){
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
            }
          }
        })
    }
    
    render(){
        return (
            <div>
                <button className="bitrate" onClick={this.handleBit}>Bit Rate</button>   
                <button className="resolution" onClick={this.handleRes}>Resolution</button> 
            </div>  
        )
    }
}

export default YouTubeDebugger;