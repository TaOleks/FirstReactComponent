import React from 'react'
import TodosList from './TodosList';

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
    return <div>
        {
            toDos.map((item) =>{
                
                return <TodosList key={item.id} name={item.name} id={item.id}/>
            })
        }
         </div>

}

export default RenderComponent