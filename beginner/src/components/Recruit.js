import React, {Component} from 'react'

class Recruit extends Component{
    constructor(){
    super()
    this.state = {
        message: 'Do you wish to join?'
    }
    }

    changeMessage(){
        this.setState ({
            message: 'Congratulations you have joined club'
        })
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Join</button>
            </div>
        )
    }
}

export default Recruit