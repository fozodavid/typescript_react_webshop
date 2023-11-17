import React, { Component } from "react";
import ProductsView from "./ProductsView";
import Filters from "./Filters";
import {Product} from '../types'
import { useFilters } from "../hooks/useFilters";

interface WebShopInterface {
  products: Product[]
}

const WebShop: React.FC<WebShopInterface> = ({ products }) => {
  const {
    checkboxHandler,
    categoryHandler,
    updateDisplay,
    activeFilters
  } = useFilters()

  return (
    <div className='row'>
      <Filters
        checkboxHandler={checkboxHandler}
        categoryHandler={categoryHandler}
        updateDisplay={updateDisplay}
      />
      <ProductsView products={products} activeFilters={activeFilters} />
    </div>
  );
}

export default WebShop;