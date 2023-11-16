export type Product = {
  "_id": string
  "index": number
  "guid": string
  "price": string
  "picture": string
  "color": string
  "category": string
  "brand": string
  "line": string
  "model": number,
  "name": string
  "description": string
  "registered": string
  "tags": string[]
}

export type FilterKeyList = 'brands' | 'colors'

export type FilterConfig = {
  category: string
  brands: string[]
  colors: string[]
}