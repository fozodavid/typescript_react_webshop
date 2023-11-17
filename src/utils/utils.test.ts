const { isFilteredCategory, filterByAttribute, convertCurrencyToNumber, sortByPrice, filterProducts } = jest.requireActual("./utils")

describe("testing filterCategory", () => {
  test("isFilteredCategory matches on filter", () => {
    const category = "LAPTOP"
    const displayedCategory = "LAPTOP"
    expect(isFilteredCategory(category, displayedCategory)).toEqual(true)
  })

  test('isFilteredCategory does not match on filter', () => {
    const category = "MOBILE"
    const displayedCategory = "LAPTOP"
    expect(isFilteredCategory(category, displayedCategory)).toEqual(false)
  })

  test('isFilteredCategory case insensitive case', () => {
    const category = "LAPTOP"
    const displayedCategory = "laptop"
    expect(isFilteredCategory(category, displayedCategory)).toEqual(true)
  })
})
  
describe("testing filterByAttribute", () => {
  test("filterByAttribute matches on filter", () => {
    const itemAttribute = "DELL"
    const selectedAttributes = ["DELL", "HP"]
    expect(filterByAttribute(itemAttribute, selectedAttributes)).toEqual(true)
  })

  test("filterByAttribute does not match on filter", () => {
    const itemAttribute = "DELL"
    const selectedAttributes = ["HP"]
    expect(filterByAttribute(itemAttribute, selectedAttributes)).toEqual(false)
  })

  test("filterByAttribute case insensitive", () => {
    const itemAttribute = "DELL"
    const selectedAttributes = ["dell"]
    expect(filterByAttribute(itemAttribute, selectedAttributes)).toEqual(true)
  })
})

describe("testing stripCurrencySymbol", () => {
  test("stripCurrencySymbol removes $", () => {
    const price = "$100.00"
    expect(convertCurrencyToNumber(price)).toEqual(100.00)
  })

  test("stripCurrencySymbol gets a price without symbol", () => {
    const price = "100.00"
    expect(convertCurrencyToNumber(price)).toEqual(100.00)
  })

  test("stripCurrencySymbol gets a nonsensical string", () => {
      const price = "hello"
      expect(convertCurrencyToNumber(price)).toEqual(0)
  })
})

describe("testing sortByPrice", () => {
  test("sortByPrice sorts correctly", () => {
    const current = {price: "$100.00"}
    const next = {price: "$200.00"}
    expect(sortByPrice(current, next)).toEqual(-100)
  })

  test("sortByPrice sorts correctly", () => {
    const current = {price: "$200.00"}
    const next = {price: "$100.00"}
    expect(sortByPrice(current, next)).toEqual(100)
  })
})

describe("testing filterProducts", () => {
  test("filterProducts filters correctly", () => {
    const data = [
      {category: "LAPTOP", brand: "DELL", color: "BLACK", price: "$100.00"},
      {category: "MOBILE", brand: "APPLE", color: "BLACK", price: "$100.00"},
      {category: "LAPTOP", brand: "HP", color: "BLACK", price: "$100.00"}
    ]
    const onDisplay = {category: "LAPTOP", brands: ["DELL"], colors: ["BLACK"]}
    expect(filterProducts(data, onDisplay)).toEqual([
      {category: "LAPTOP", brand: "DELL", color: "BLACK", price: "$100.00"}
    ])
  })
})
