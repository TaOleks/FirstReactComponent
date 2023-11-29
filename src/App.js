import logo from './logo.svg';
import './App.css';
import HelloWorldComponent from './HelloWorldComponent';

function App() {
  const hello = "Hello World"
  const number = 1
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { hello}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {number ===1?<HelloWorldComponent/>: "There i no component found"}
      </header>
    </div>
  );
}

export default App;
