import React from 'react'
import TodosList from './TodosList';
import GrandChildComponent from './GrandChildComponent';

const RenderComponent = () => {
  

    const toDos = [{
            id: 1,
            name: 'firstTodo'
        },
        {
            id: 2,
            name: 'secondTodo'
        },
        {
            id: 3,
            name: 'thirdTodo'
        },
        {
            id: 4,
            name: 'fourthTodo'
        },
    ]

    const myNameFromObject = {name:'Oleksii in object'};
    const myNameFromArray = ['Oleksii in arrey', 'Alex'];
    const myNameFromFunction = ()=>{
    return "Oleksii in function"
    }

    return <div>
        {/* {
            toDos.map((item) =>{
                
                return <TodosList key={item.id} name={item.name} id={item.id}/>
            })
        } */}
        <GrandChildComponent myNameFromObject ={myNameFromObject} myNameFromArray={myNameFromArray} myNameFromFunction = {myNameFromFunction()}/>

         </div>

}

export default RenderComponent