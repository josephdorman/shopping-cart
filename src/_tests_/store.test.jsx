import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Store from '../components/store'

// setup props

let data = [
  {
    id: 1,
    title: 'productone',
    image: 'imageone',
    rating: [{rate: 5, count: 400}],
    price: 345
  },
  {
    id: 2,
    title: 'producttwo',
    image: 'imagethree',
    rating: [{rate: 2, count: 367}],
    price: 560
  },
  {
    id: 1,
    title: 'productthree',
    image: 'imagethree',
    rating: [{rate: 3, count: 1569}],
    price: 220
  }
]

const error = true;
const loading = true;

describe('store componenet', () => {
  it('renders product cards', () => {
    render(<MemoryRouter><Store data={data}/></MemoryRouter>);
    expect(screen.queryAllByTestId('card').length).toBe(3);
  });
  it('renders no product cards', () => {
    data = []
    render(<MemoryRouter><Store data={data}/></MemoryRouter>);
    expect(screen.queryAllByTestId('card').length).toBe(0);
  });
  it('renders error', () => {
    render(<MemoryRouter><Store data={data} error={error}/></MemoryRouter>);
    expect(screen.getByText('A network error was encountered')).toBeInTheDocument();
  });
  it('renders loading', () => {
    render(<MemoryRouter><Store data={data} loading={loading}/></MemoryRouter>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
})