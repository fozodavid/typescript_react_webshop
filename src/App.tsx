import React, { Component } from "react";
import products from "./data/products.json";
import WebShop from "./components/WebShop";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>React Webshop App</h1>
      </header>
      <WebShop products={products} />
    </div>
  );
}

export default App;
