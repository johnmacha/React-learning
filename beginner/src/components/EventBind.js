import React, { Component } from 'react'

class EventBind extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      message: 'Hello'
   }
    /*Here we're adding the bind to the constructor as opposed to the render method */
    /*this.clickHandler = this.clickHandler.bind(this)*/
 }
 
/*  clickHandler(){
    this.setState({
        message: 'Welcome to the party'
    })
    console.log(this);
 }*/

/*Using class property as arrow function in event binding*/
 clickHandler = () =>{
    this.setState({
        message: 'Welcome to the party'
    })
    console.log(this);  
 }

    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> This is binding in the render method */}
        {/*Here we're using the Arrow function approach*/}
        {/* <button onClick = {() => this.clickHandler()}>Click</button> */}
        <button onClick = {this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
