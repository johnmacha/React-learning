import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Parent'
    }
    this.greetParent = this.greetParent.bind(this)
  }

    /*Here We define the Method*/
  greetParent(childName){
    /*alert('Hello' + this.state.parentName);*/
    /* Since we are using ES6 we can use Template-Literals*/
    alert (`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent} /> {/*Here we pass the Method as a Prop*/}
      </div>
    )
  }
}

export default ParentComponent
 