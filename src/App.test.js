import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  window.scrollTo = () => {};
});

test('renders the home page hero', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /travel designed for the curious mind/i })
  ).toBeInTheDocument();
});
