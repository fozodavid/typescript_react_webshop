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
    expect(screen.queryAllByTestId('tile')).toHaveLength(1)
  })

  it.skip('Filter applied to laptops', () => {
    // WIP
    fireEvent.select(screen.getByText('Mobile'))
    fireEvent.click(screen.getByText(BRANDS[1]))
    fireEvent.click(screen.getByText(COLORS[1]))
  })
})