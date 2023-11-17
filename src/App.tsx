import React from "react";
import products from "./data/products.json";
import { ProductsPage } from "pages";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>React Webshop App</h1>
      </header>
      <ProductsPage products={products} />
    </div>
  );
}

export default App;
