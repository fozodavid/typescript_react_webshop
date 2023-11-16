import React, { Component } from "react";
import ProductsView from "./ProductsView";
import Filters from "./Filters";
import { CATEGORIES } from "../constants";
import {FilterConfig, FilterKeyList, Product} from '../types'


interface WebShopInterface {
  products: Product[]
}

const WebShop: React.FC<WebShopInterface> = ({ products }) => {
  const [filters, setFilters] = React.useState<FilterConfig>({
    category: CATEGORIES[0],
    brands: [],
    colors: [],
  })
  const [activeFilters, setactive] = React.useState<FilterConfig>({
      category: CATEGORIES[0],
      brands: [],
      colors: [],
  })

  const updateDisplay = () => {
    setactive({ ...filters })
  }

  const categoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({
        ...prev,
        category: e.target.value
    }))
  }

  const addToFilters = (key: FilterKeyList, item: string): void => {
    const newValues = [...filters[key], item ]
    setFilters(prev => ({
      ...prev,
      [key]: newValues
    }))
  }

  const removeFromFilters = (key: FilterKeyList, id: string): void => {
    const newValues = [...filters[key].filter(item => item !== id)]
    setFilters(prev => ({
      ...prev,
      [key]: newValues
    }))
  }

  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      return addToFilters(e.target.name as FilterKeyList, e.target.id)
    }
    removeFromFilters(e.target.name as FilterKeyList, e.target.id);
  };

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