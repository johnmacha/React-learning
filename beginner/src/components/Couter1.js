import React, { Component } from 'react'

class Couter1 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
    
      incrementCount = () =>{
        this.setState(prevState =>{
           return {count: prevState.count + 1}
        })
      }

    render() {
    return (
      <div>
        {this.props.children(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default Couter1
