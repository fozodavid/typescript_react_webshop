import React from "react";
import ProductTile from "./ProductTile";
import filterProducts from "../utils";
import "./ProductsView.css";
import { FilterConfig, Product } from '../types'


interface IProductsView {
  products: Product[]
  activeFilters: FilterConfig
}

const ProductsView: React.FC<IProductsView> = ({ products, activeFilters }) => {
  const itemsOnDisplay = filterProducts(products, activeFilters);
  if (itemsOnDisplay.length > 0) {
    return (
      <div className="col col-md-9 products">
        {itemsOnDisplay.map(item => <ProductTile key={item.guid} {...item} />)}
      </div>
    );
  }
  return <p className="error">Sorry, no products matched your selection.</p>;
}

export default ProductsView;