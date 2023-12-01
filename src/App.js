
import './App.css';
import {useState} from 'react';

function App() {
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

  return ( 
    <div className="App">
      <header className="App-header">
        <input onChange={OnChangeHandler} value = {input}/>
       <ul>
          {item.map((element, index) =>(
           <li>
           { element} {index}
          </li>))}
       </ul>
       <button onClick={onClickHandler}>Add new element</button>

      </header>
    </div>
  );
}

export default App;
