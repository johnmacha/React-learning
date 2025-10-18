import React, { Component } from 'react'
import TotoComponent from './TotoComponent'

class PapaComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Papa'
    }
    this.greetPapa = this.greetPapa.bind(this)
  }

  greetPapa(childName){
    alert(`Heey ${this.state.parentName} from ${childName}`)
  }
  
  
    render() {
    return (
      <div>
        <TotoComponent greetHandler = {this.greetPapa}/>
      </div>
    )
  }
}

export default PapaComponent
