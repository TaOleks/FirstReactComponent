import React from 'react'
import GrandChildComponent from './GrandChildComponent'

const  TodosList = (props) =>{
    
    return (
        <>
         <GrandChildComponent propsFromTodoList = {props.id} />
        <p>{props.name}</p> 
    </>
    )
}

export default  TodosList