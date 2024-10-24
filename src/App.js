import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a 
          className='App-link' 
          href='https://www.youtube.com/watch?v=ZF91X_sxo5U'
          target='_blank'
          rel='noreferrer'
        >
          Pörög a logó...
        </a>
      </header>
    </div>
  );
}

export default App;
