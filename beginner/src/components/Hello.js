import React from 'react';

 const Hello = () => {
    // This is the JSX Version

    // return (
    //     <div className = 'dummyClass'>
    //         <h1>Slow and steady wins the Race</h1>
    //     </div>
    // )

    // Now we rewrite the component without JSX
    return React.createElement('div', 
    {id:'hello', className:'dummyClass'},
    React.createElement('h1', null, 'Youre doing great Amigo.'));
 }

 export default Hello;