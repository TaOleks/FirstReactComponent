import { useState } from "react";

const CounterComponent = () => {
const [count, setCount]= useState (0);
// if we want to call function more than ones , we must use (prevState) - poperednij state
const increment = ()=>{
    setCount((prevState)=>prevState+1)
    setCount((prevState)=>prevState+1)
}

const decrement = ()=>{
    setCount((prevState) => prevState - 1)
}
    return <div>
        <p>{count}</p>
        <button onClick={increment}>Increment me</button>
        <button onClick={decrement}>Dicrement me</button>
    </div>
}

export default CounterComponent