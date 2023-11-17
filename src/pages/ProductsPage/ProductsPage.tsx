import React from "react";
import { ProductsCatalog, FilterSidebar } from "./components";
import { Product } from 'types'
import { useFilters } from "hooks";

interface IWebShop {
  products: Product[]
}

const ProductsPage: React.FC<IWebShop> = ({ products }) => {
  const {
    checkboxHandler,
    categoryHandler,
    updateDisplay,
    activeFilters
  } = useFilters()

  return (
    <div className='row'>
      <FilterSidebar
        checkboxHandler={checkboxHandler}
        categoryHandler={categoryHandler}
        updateDisplay={updateDisplay}
      />
      <ProductsCatalog products={products} activeFilters={activeFilters} />
    </div>
  );
}

export default ProductsPage;