import React, { Component } from 'react'

class UserGreeting extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      isLoggedIn: 1
   }
 }
 
 
  render() {
    /*This is Conditional rendering using Short Circuit operator */
    return this.state.isLoggedIn && <div>Welcome Juan</div>

    /*This is Conditional rendering using Ternary operator */
    // return(
    //   this.state.isLoggedIn ?(
    //     <div>Welcome Juan</div> 
    //   )
    //  :(
    //   <div>Welcome Guest</div>
    //  )
    // )

    /*This is Conditional rendering using the Element Variable approach */
    // let message
    // if(this.state.isLoggedIn){
    //   message = <div>Welcome Juan </div>
    // }
    // else{
    //   message = <div>Welcome Guest</div>
    // }
    // return(
    //   <div>{message}</div>
    // )

    /*This is Conditional rendering using if/else*/
    // if (this.state.isLoggedIn){
    //   return(
    //     <div>Welcome Juan </div>
    //   )
    // }
    // else{
    //   return(
    //     <div>Welcome Guest</div>
    //   )
    // }
    // return (
    //   <div>
    //     <div>Welcome Juan </div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
