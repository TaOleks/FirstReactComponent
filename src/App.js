
import './App.css';

import CounterComponent from './CounterComponent';
import ListComponent from './ListComponent';
function App() {
 

  return ( 
    <div className="App">
      <header className="App-header">
      <ListComponent/>
      </header>
      <CounterComponent/>
    </div>
  );
}

export default App;
