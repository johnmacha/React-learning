import React from 'react'

// function Greet(){
//     return <h1>Jonte did it!</h1>;
// }

// Rewriting the component using esx arrow function
const Greet = props => {//Destructuring the props 
// console.log(); //Using 'props' parameter in functional component
// props.name = "Jonte" 
const {name, heroName} = props
return (
    <div>
    <h1>{name} a.k.a {heroName} did it!</h1>

    {/* {props.children} */}
 </div>
    )
}

// Default allows us to use any name to import
export default Greet;