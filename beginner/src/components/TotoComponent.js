import React from 'react'

function TotoComponent(props) {
  return (
    <div>
      <button onClick = {() => props.greetHandler('toto')}>Greet Papa</button>
    </div>
  )
}

export default TotoComponent
