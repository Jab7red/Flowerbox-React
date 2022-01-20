import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner';
import Product from './components/Products/Products';
import ProdectData from './components/Products/ProductsData';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {

const products = ProdectData.map((ele, index) => {
  return (
    <Product
    {...ele}
    key={index}
    />
  );
});

  return (
    <div className="App">
      <Nav />
      <Banner />
      <section className='Products'>
      {products}
      </section>
      <Footer />
    </div>
  );
}

export default App;
