import { FilterConfig, Product } from '../types'


export const isFilteredCategory = (category: string, displayedCategory: string): boolean => {
  return category.toLowerCase() === displayedCategory.toLowerCase()
}

export const filterByAttribute = (itemAttribute: string, selectedAttributes: string[]): boolean => {
  selectedAttributes = selectedAttributes.map(attr => attr.toLowerCase())
  itemAttribute = itemAttribute.toLowerCase()

  if (selectedAttributes.length === 0) {
    return true;
  }
  return selectedAttributes.includes(itemAttribute);
}

export const convertCurrencyToNumber = (price: string): number => {
  const numericPortion = price.match(/\D*([0-9._]*)/)?.[1];
  const priceAsNumber = numericPortion && parseFloat(numericPortion);
  if (!priceAsNumber) {
    return 0
  }
  return priceAsNumber
}

export const sortByPrice = (current: Product, next: Product): number => {
  const currentPrice = convertCurrencyToNumber(current.price);
  const nextPrice = convertCurrencyToNumber(next.price);
  return currentPrice - nextPrice;
}

export const filterProducts = (data: Product[], onDisplay: FilterConfig): Product[] => {
  return data
    .filter(item => isFilteredCategory(item.category, onDisplay.category))
    .filter(item => filterByAttribute(item.brand, onDisplay.brands))
    .filter(item => filterByAttribute(item.color, onDisplay.colors))
    .sort((current, next) => sortByPrice(current, next));
}