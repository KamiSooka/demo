import './App.css';
import NavBar from './components/navbar/NavBar'
import Product from './components/product/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/table/Table';


const props = {
  name: "Nike Air Max 270 React",
  price: "160€",
  description: "La Nike Air Max 270 React s'inspire de deux icônes de la grande famille Air : la Air Max 180 et la Air Max 93. Elle est dotée de la plus grande unité Air au talon jamais utilisé par Nike, pour une foulée ultra-souple qui offre un confort incroyable tout au long de la journée.",
  stock: "10 en stock",
  img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/chaussures-air-max-270-pour-Kqzbp7.png"
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Product props={props} />
      <Table />
    </div>
  );
}

export default App;
