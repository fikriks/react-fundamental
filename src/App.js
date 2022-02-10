import logo from './logo.svg';
import './App.css';

function App() {
  const hello = "Hello World";
  const jsx = <strong>Saya Menggunakan React JSX</strong>;
  const category = "SNEAKER";
  const price = 7400000;
  let a = 1;
  let b = 2;

  return (
    <div className="Parent">
        {hello}
      <br/>
        {jsx}
      <br/>
        {a + b}
      <br/>

        <div class="Foto">
          <img src="shoes.jpg" />
        </div>
        <div class="Deskripsi">
          <p class="Cate">{category}</p>
          <h1 class="Tittle">Pinky Swag</h1>
          <p class="Price">IDR {price}</p>
          <p class="Info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
    </div>
  );
}

export default App;
