import React from 'react'

const Hello = () => {
    // return(
    //     <div classname='dummyClass'>
    //       <h1>Oguzhan Birk</h1>
    //     </div>
    // )
    return React.createElement('div',{id: 'hello' , class:'dummyClass'},React.createElement('h1',null,'Hello World'))
}

export default Hello