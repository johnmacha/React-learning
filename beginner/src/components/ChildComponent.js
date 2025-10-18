import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/*Here we access the Method using the Props object*/}
      <button onClick = {() => props.greetHandler('child')}>Greet Parent</button> 
    </div>
  )
}

export default ChildComponent
