import logo from './logo.svg';
import './App.css';
import './Payments'

function App() {
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url =  process.env.REACT_APP_API_URL+'/transactions';
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href='../SoftLand/blog-single.html'>LANDING PAGE</a>
      </header>
    </div>
  );
}

export default App;
