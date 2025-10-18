import React, { Component } from "react";

class Welcome extends Component{
    render(){//Here we're destructuring props in the class component
        const {name, heroName} = this.props
        // const {state1, state2} = this.state //This is destructuring state
        //Using 'props' parameter in Class component
        return (
        <h1>Welcome {name} a.k.a {heroName}</h1>
        )
    }
}

export default Welcome;