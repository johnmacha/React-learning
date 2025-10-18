import React, { Component } from 'react'

{/*___REACTJS SNIPPETS___*/}
{/*rce - creates Class Component*/}
{/*rfce - creates Functional Component*/}
{/*rfc - creates Functional component with export on the function */}
{/*rconst - creates constructor carrying the state*/} 

class ClassClick extends Component {
    clickHandler(){
        console.log('Clicked the button');
    }
    render() {

    return (
      <div>
        <button onClick = {this.clickHandler}>Click me</button> {/*We use curly braces for functions in event-handling without parenthesis*/}
      </div>
    )
  }
}

export default ClassClick
