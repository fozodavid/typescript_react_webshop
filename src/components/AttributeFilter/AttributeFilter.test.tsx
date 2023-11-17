import { render, screen, fireEvent } from '@testing-library/react';
import AttributeFilter from './AttributeFilter'
import { mockName, mockOptions, mockHandler } from '../../mocks'


describe('AttributeFilter', () => {
  it('renders component', () => {
    render(<AttributeFilter name={mockName} options={mockOptions} handler={mockHandler} />);
    expect(screen.getByText(`brands`)).toMatchSnapshot('<h2>brands</h2>')
    for (const opt of mockOptions) {
      expect(screen.getByLabelText(opt))
        .toMatchSnapshot(`<label class="form-label" for="${opt}">${opt}</label>`)
    }
  })

  it.skip('click on first checkbox', () => {
    fireEvent.click(screen.getByTestId(mockOptions[1]));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  })

})