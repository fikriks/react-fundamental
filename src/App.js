import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';

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
       <ProdukInfo category="SHOES" name="Pinky Swag" isDiscount="yes" />
       <ReviewItems />
    </div>
  );
}

function FotoProduk(){
  return (
      <div className="Foto">
        <img src="shoes.jpg" />
      </div>
  );
}

function CheckDiscount(props){
  const { isDiscount } = props;

  if(isDiscount == "yes"){
    return (
      <p>Diskon 50% Off</p>
    );
  } else if(isDiscount == "coming") {
    return (
      <p>Akan ada diskon</p>
    );
  } else {
    return (
      <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(props){
  const { category, name, isDiscount } = props;
  const price = 7400000;
  const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak gerah"];
  const listBenefit = benefits.map((itemBenefit) =>
    <li>{itemBenefit}</li>
  );

  return (
    <div>
        <div className="Deskripsi">
          <p className="Cate">{category}</p>
          <h1 className="Title">{name}</h1>
          <p className="Price">IDR {price}</p>
          <CheckDiscount isDiscount={isDiscount}/> 
          <p className="Info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <ul>
            {listBenefit}
          </ul>
          <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
        </div>
    </div>
  );
}

function TambahCart(e){
  return alert(`Membeli Produk ${e}`);
}

export default App;
