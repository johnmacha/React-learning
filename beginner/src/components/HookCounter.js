import React, {useState} from 'react'

function HookCounter() {
/*This is Array distructuring*/
const [count, setCount] = useState(0)

  return (
    <div> {/*We use arrow functions in function calls*/}
      <button onClick = {() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter
