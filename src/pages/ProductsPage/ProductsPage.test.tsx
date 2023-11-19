import { render, screen, fireEvent } from '@testing-library/react';
import ProductsPage from './ProductsPage';
import { BRANDS, COLORS } from 'consts'
import { mockData } from 'mocks';


describe('ProductsPage', () => {

  it('Filter applied', () => {
    const screen = render(<ProductsPage products={mockData} />);
    fireEvent.click(screen.getByText(BRANDS[0]))
    fireEvent.click(screen.getByText(COLORS[0]))
    fireEvent.click(screen.getByText('Filter'))
    expect(screen.getAllByTestId('product-tile')).toHaveLength(1)
  })

  it('Filter applied to laptops', () => {
    const screen = render(<ProductsPage products={mockData} />);
    fireEvent.change(screen.getByTestId('category-filter'), { target: { value: 'LAPTOP' } })
    fireEvent.click(screen.getByText(BRANDS[0]))
    fireEvent.click(screen.getByText(COLORS[0]))
    fireEvent.click(screen.getByText('Filter'))
    expect(screen.queryAllByTestId('product-tile')).toHaveLength(2)
  })
})