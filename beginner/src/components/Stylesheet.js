import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
  let colorName = props.primary ? 'primary' : ''

    return (
    <div>
      <h1 className={`${colorName} font-xl font-style`} >Stylesheets</h1>
    </div>
  )
}

export default Stylesheet
