export type Price = `£${number}`

export type Product = {
  "_id": string
  "index": number
  "guid": string
  "price": Price
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

export type FilterConfig = {
  category: string
  brands: string[]
  colors: string[]
}

export type FilterKeyList = Exclude<keyof FilterConfig, 'category'>