import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName:''})
  return (
    <form>
      <input 
      type= "text" 
      value= {name.firstName} /* e - is event function */
      onChange= { e => setName({ ...name, firstName: e.target.value })} //... is spread operator
      /> {/*e.t.v*/}
      
      <input 
      type= "text" 
      value= {name.lastName}
      onChange= { e => setName({ ...name, lastName: e.target.value })}
      />
      
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCounterThree
