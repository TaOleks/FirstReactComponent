import React from 'react'

const GrandChildComponent = (props) => {
  return (

    // <div>
    //     <p>{props.propsFromTodoList}</p>
    // </div>
<>
<p>{props.myNameFromObject.name}</p>
    <p>{props.myNameFromArray[1]}</p>
    <p>{props.myNameFromFunction}</p>
    </>
    
  )
}

export default GrandChildComponent