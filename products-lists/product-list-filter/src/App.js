// import { Header } from "./components/header/Header";
import ProductList from "./components/products/ProductsList";
import {products,categories} from "./helper/data";
import "./App.scss";


function App() {
  return (
    <div>
      {/* <Header />       */}
      <ProductList products={products} />
    </div>
  );
}

export default App;
