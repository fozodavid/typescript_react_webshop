import { render, screen } from '@testing-library/react';
import AttributeFilter from './AttributeFilter'

test('renders component', () => {
  const mockName = 'brands';
  const mockOptions = ['ASUS', 'DELL', 'HP', 'LENOVO', 'MSI'];
  const mockHandler = () => {};
  render(<AttributeFilter name={mockName} options={mockOptions} handler={mockHandler} />);
  expect(screen.getByText(`brands`)).toMatchSnapshot('<h2>brands</h2>')
  for (const opt of mockOptions) {
    expect(screen.getByLabelText(opt))
      .toMatchSnapshot(`<label class="form-label" for=${opt}>${opt}</label>`)
  }
});