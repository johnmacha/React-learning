import React from 'react'

function Person({person}) {
    // This component is only responsible for rendering the person-HTML
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I know {person.skill}
    </h2>
    </div>
  )
}

export default Person
