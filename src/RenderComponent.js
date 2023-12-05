import React from 'react'

const RenderComponent = ()=>{
    const firstRenderValue = false;
    const secondRenderValue = '';


    // return <>
    // {firstRenderValue && <p>I'm firstRenderValue</p>}
    // {secondRenderValue && <p>I'm secondRenderValue</p>}
    // </>
    // The same with ternarny operator
//     return (
//     <>
//      {firstRenderValue ? <p>"I'm first"</p> : <p>"I'm second"</p>}
//      </>
//    )
//  the same operator if

       if (firstRenderValue) {
        return <p>First</p> 
}
       if (secondRenderValue) {
        return <p>Second</p>
    
       }
       return <p>third</p>
    }

export default RenderComponent