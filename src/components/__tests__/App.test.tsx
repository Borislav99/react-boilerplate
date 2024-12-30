import {findByTestId, fireEvent, getByRole} from '@testing-library/react';
import App from '@components/App';
import {renderWithProviders} from '@utils/test-utils';

describe('App::', () => {
  it('should render app', async () => {
    const {container} = renderWithProviders(<App />);
    expect(container).toMatchSnapshot();
  });

  it('should increase counter', async () => {
    const {container} = renderWithProviders(<App />);
    const button = getByRole(container, 'button');
    fireEvent.click(button);
    fireEvent.click(button);
    expect((await findByTestId(container, 'counter')).textContent).toBe('2');
  });
});
