import React from "react";
import { ProductTile } from "./ProductTile";
import filterProducts from "utils";
import { FilterConfig, Product } from 'types'
import "./ProductsCatalog.css";


interface IProductsView {
  products: Product[]
  activeFilters: FilterConfig
}

const ProductsCatalog: React.FC<IProductsView> = ({ products, activeFilters }) => {
  const itemsOnDisplay: Product[] = filterProducts(products, activeFilters);
  if (itemsOnDisplay.length > 0) {
    return (
      <div className="col col-md-9 products">
        {itemsOnDisplay.map(item => <ProductTile key={item.guid} {...item} />)}
      </div>
    );
  }
  return <p className="error">Sorry, no products matched your selection.</p>;
}

export default ProductsCatalog;