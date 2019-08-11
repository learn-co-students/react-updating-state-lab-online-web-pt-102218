// Code DigitalClicker Component Here
import React from 'react' 


class DigitalClicker extends React.Component {

    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }
    
    handleClick = () => {
        const newState = this.state.timesClicked + 1
        this.setState({
            timesClicked: newState
        })
        
    }
    
    render() {
        return(
            <div>
                <label> 
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
                </label>
            </div>
        )
    }
    






}





export default DigitalClicker