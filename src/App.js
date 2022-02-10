import logo from './logo.svg';
import './App.css';

function App() {
  const hello = "Hello World";
  const jsx = <strong>Saya Menggunakan React JSX</strong>;
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
       <FotoProduk />
       <ProdukInfo category="SHOES" name="Pinky Swag"/>
    </div>
  );
}

function FotoProduk() {
  return (
      <div className="Foto">
        <img src="shoes.jpg" />
      </div>
  );
}

function ProdukInfo(props){
  const { category, name } = props;
  const price = 7400000;

  return (
    <div>
        <div className="Deskripsi">
          <p className="Cate">{category}</p>
          <h1 className="Title">{name}</h1>
          <p className="Price">IDR {price}</p>
          <p className="Info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
        </div>
    </div>
  );
}

function TambahCart(e){
  return alert(`Membeli Produk ${e}`);
}

export default App;
