import React from "react";
import products from "./data/products.json";
import { ProductsPage } from "pages";
import { Product } from "types";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>React Webshop App</h1>
      </header>
      <ProductsPage products={products as Product[]} />
    </div>
  );
}

export default App;
