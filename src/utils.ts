import { FilterConfig, Product } from './types'


const filterCategory = (category: string, displayedCategory: string): boolean => {
  return category === displayedCategory;
}

const filterByAttribute = (itemAttribute: string, displayedAttribute: string[]): boolean => {
  if (displayedAttribute.length === 0) {
    return true;
  }
  return displayedAttribute.includes(itemAttribute);
}

const stripCurrencySymbol = (price: string): string => {
  return price.substring(1);
}

const sortByPrice = (current: Product, next: Product): number => {
  const currentPrice = stripCurrencySymbol(current.price);
  const nextPrice = stripCurrencySymbol(next.price);
  return parseInt(currentPrice) - parseInt(nextPrice);
}


export default function filterProducts(data: Product[], onDisplay: FilterConfig) {
  return data
    .filter(item => filterCategory(item.category, onDisplay.category))
    .filter(item => filterByAttribute(item.brand, onDisplay.brands))
    .filter(item => filterByAttribute(item.color, onDisplay.colors))
    .sort((current, next) => sortByPrice(current, next));
}