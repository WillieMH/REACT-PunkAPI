import { render, screen } from '@testing-library/react';
import App from './App';
import SearchBanner from './components/SearchBanner/SearchBanner';
import Nav from './containers/Nav/Nav'


it("should render the page", () => {
  render(<App/>)

  screen.debug();

  var pageload = screen.getByText(/poison/i)

  expect(pageload).toBeInTheDocument();
})

it("should render filter options", () => {
  render(<Nav />)

  const abvFilter = screen.getAllByRole("checkbox", { name: /acidity/i});

  expect(abvFilter).toBeInTheDocument();
})

it("should render the search bar", () => {
  render(<SearchBanner />)

  const search = screen.getByRole("textbox");

  expect(search).toBeInTheDocument();
})