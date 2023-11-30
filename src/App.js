
import './App.css';
import HelloWorldComponent from './HelloWorldComponent';
import MyClassComponent from './MyClassComponent';
function App() {
  const hello = "Hello World"
  const component = 'functional'
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          { hello}
        </p>
        
        {component ==='functional'?<HelloWorldComponent/>:<MyClassComponent/> }
        
      </header>
    </div>
  );
}

export default App;
