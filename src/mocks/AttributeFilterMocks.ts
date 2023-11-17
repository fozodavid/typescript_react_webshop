export const mockName = 'brands';

export const mockOptions = ['ASUS', 'DELL', 'HP', 'LENOVO', 'MSI'];

export const mockHandler = jest.fn((e) => {
    expect(e.target).toMatchObject({
        name: mockName,
        value: mockOptions[0],
        checked: true
    });
});