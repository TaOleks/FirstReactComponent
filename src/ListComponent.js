import { useState } from "react";


const ListComponent = ()=>{

    const [input, setInput] = useState(['']) ;
    const [item, setItem] = useState(['First Element']) ;
  
    const onClickHandler = ()=>{
      
      const updatedElement = [...item, input]
      setItem(updatedElement);
      setInput('')
    }
    const OnChangeHandler= (e) => {
      const value = e.target.value;
      setInput(value)
    }

    return(

        //React.fragment

        <>
        <input onChange={OnChangeHandler} value = {input}/>
        <ul>
           {item.map((element, index) =>(
            <li>
            { element} {index}
           </li>))}
        </ul>
        <button onClick={onClickHandler}>Add new element</button>
        </> 
    )
}
export default ListComponent