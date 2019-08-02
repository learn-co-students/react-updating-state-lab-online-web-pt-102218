import React from 'react'

export default class DigitalClicker extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			timesClicked: 0,
		}
	}

	clickHandler = e => {
		this.setState({
			timesClicked: this.state.timesClicked + 1
		})
	}


	render(){
		return (
			<button onClick={this.clickHandler}>
				{this.state.timesClicked}
			</button>
		)
	}
}
