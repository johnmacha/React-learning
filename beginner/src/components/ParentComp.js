import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'John'
    }
  }
  
  componentDidMount() {
    setInterval(() => {
        this.setState({
            name: 'John'
        })
    }, 2000)
  }
  
    render() {
    // console.log('*************************Parent Comp render*******************************')
    return (
      <div>
        Parent Component
        {/* <RegComp name = {this.state.name} />
        <PureComp name = {this.state.name} /> */}
      <MemoComp run = {this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
