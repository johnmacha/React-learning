import React from 'react'

function MemoComp({run}) {
    console.log('Rendering Memo Component')
  return (
    <div>
      {run}
    </div>
  )
}

export default React.memo (MemoComp)
