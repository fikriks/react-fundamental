import logo from './logo.svg';
import './App.css';

function App() {
  const hello = "Hello World";
  const jsx = <strong>Saya Menggunakan React JSX</strong>;
  let a = 1;
  let b = 2;

  return (
    <div className="App">
      {hello}
      <br/>
      {jsx}
      <br/>
      {a + b}
    </div>
  );
}

export default App;
