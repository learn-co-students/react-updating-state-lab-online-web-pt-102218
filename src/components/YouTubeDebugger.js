import React from 'react'

export default class YouTubeDebugger extends React.Component {

	constructor(props){
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

	bitrateClickHandler = () => {
		this.setState({
			...this.state,
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		})
	}

	resolutionClickHandler = () => {
		this.setState({
			...this.state,
			settings: {
				...this.state.settings,
				video: {
					resolution: '720p'
				}
			}
		})
	}

	render(){
		return (
			<div>
				<button className="bitrate" onClick={this.bitrateClickHandler}>Bitrate</button>
				<button className="resolution" onClick={this.resolutionClickHandler}>Resolution</button>
			</div>
		)
	}
}
