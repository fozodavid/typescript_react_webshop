import React from "react"
import { FilterConfig, FilterKeyList } from '../types'
import { CATEGORIES } from "../constants";


const initialState: FilterConfig = {
  category: CATEGORIES[0],
  brands: [],
  colors: [],
}

export const useFilters = () => {
  const [filters, setFilters] = React.useState<FilterConfig>(initialState)
  const [activeFilters, setactive] = React.useState<FilterConfig>(initialState)

  const updateDisplay = () => {
    setactive({ ...filters })
  }

  const categoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value
    setFilters(prev => ({
        ...prev,
        category: newValue
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

  return {
    checkboxHandler,
    categoryHandler,
    updateDisplay,
    activeFilters
  }
}