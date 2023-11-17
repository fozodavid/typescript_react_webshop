import { FilterConfig, Product } from './types'


const filterCategory = (category: string, displayedCategory: string): boolean => {
  return category.toLowerCase() === displayedCategory.toLowerCase()
}

const filterByAttribute = (itemAttribute: string, selectedAttributes: string[]): boolean => {
  selectedAttributes = selectedAttributes.map(attr => attr.toUpperCase())
  itemAttribute = itemAttribute.toUpperCase()

  if (selectedAttributes.length === 0) {
    return true;
  }
  return selectedAttributes.includes(itemAttribute);
}

const stripCurrencySymbol = (price: string): string => {
  return price.substring(1);
}

const sortByPrice = (current: Product, next: Product): number => {
  const currentPrice = stripCurrencySymbol(current.price);
  const nextPrice = stripCurrencySymbol(next.price);
  return parseFloat(currentPrice) - parseFloat(nextPrice);
}


export default function filterProducts(data: Product[], onDisplay: FilterConfig) {
  return data
    .filter(item => filterCategory(item.category, onDisplay.category))
    .filter(item => filterByAttribute(item.brand, onDisplay.brands))
    .filter(item => filterByAttribute(item.color, onDisplay.colors))
    .sort((current, next) => sortByPrice(current, next));
}