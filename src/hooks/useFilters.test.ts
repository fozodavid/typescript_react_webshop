import { renderHook, act } from '@testing-library/react-hooks';
const { useFilters } = jest.requireActual("./useFilters")

const initialOptions = {
  "brands": [],
  "category": "MOBILE",
  "colors": [],

}

describe('useFilters', () => {
  it('Set filter basic use case', () => {
    const { result } = renderHook(() => useFilters());

    // Initial state
    expect(result.current.activeFilters).toMatchObject(initialOptions);
    expect(result.current.filters).toMatchObject(initialOptions);

    // Change category
    act(() => {
      result.current.categoryHandler({target: { value: 'LAPTOP' }});
    });
    expect(result.current.filters).toMatchObject({
      ...initialOptions,
      category: 'LAPTOP'
    });

    // Add brand
    act(() => {
      result.current.checkboxHandler({
        target: { checked: true, name: 'brands', id: 'ASUS' }
      });
    });
    expect(result.current.filters).toMatchObject({
      ...initialOptions,
      brands: ['ASUS'],
      category: 'LAPTOP'
    });

    // Remove brand
    act(() => {
      result.current.checkboxHandler({
        target: { checked: false, name: 'brands', id: 'ASUS' }
      });
    });
    expect(result.current.filters).toMatchObject({
      ...initialOptions,
      category: 'LAPTOP'
    });

    // Filter updated
    act(() => { result.current.updateDisplay() })
    expect(result.current.activeFilters).toMatchObject({
      ...initialOptions,
      category: 'LAPTOP'
    })
  });
});