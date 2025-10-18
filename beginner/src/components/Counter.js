import React, {Component} from 'react'
//rce 
class Counter extends Component{
//Shortcut(Snippet): rconst 

    constructor(props){
        super(props)
        this.state = {
        count: 0
        }
    }

    increment() {
        // this.setState({ //The set state is Asynchronous thus we use an Object & a Callback function
        // count: this.state.count + 1 //Object
        // },
        //  () =>{ //Callback function
        //     console.log('Callback value', this.state.count)
        // } ) 
        
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))

        console.log(this.state.count)       
        }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }    
    
    render(){
        return(
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter