import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalService as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    (useExternalService as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('displays error message when fetching fails', async () => {
    (useExternalService as jest.Mock).mockReturnValue({
      data: null,
      error: new Error('Failed to fetch data'),
      isLoading: false,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interactions', () => {
    const mockData = { id: '123', name: 'Product' };
    (useExternalService as jest.Mock).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(useExternalService).toHaveBeenCalledWith('addToCart', mockData);
  });

  test('ensures accessibility features are implemented', () => {
    (useExternalService as jest.Mock).mockReturnValue({
      data: { id: '123', name: 'Product' },
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases for data availability', () => {
    (useExternalService as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/product details/i)).not.toBeInTheDocument();
  });

  test('calls external service with correct parameters', () => {
    const mockData = { id: '123', name: 'Product' };
    (useExternalService as jest.Mock).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(useExternalService).toHaveBeenCalledWith('addToCart', mockData);
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalService as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    });
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    (useExternalService as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('displays error message when fetching fails', async () => {
    (useExternalService as jest.Mock).mockReturnValue({
      data: null,
      error: new Error('Failed to fetch data'),
      isLoading: false,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interactions', () => {
    const mockData = { id: '123', name: 'Product' };
    (useExternalService as jest.Mock).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(useExternalService).toHaveBeenCalledWith('addToCart', mockData);
  });

  test('ensures accessibility features are implemented', () => {
    (useExternalService as jest.Mock).mockReturnValue({
      data: { id: '123', name: 'Product' },
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toHaveAttribute('aria-label');
  });

  test('handles edge cases for data availability', () => {
    (useExternalService as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/product details/i)).not.toBeInTheDocument();
  });

  test('calls external service with correct parameters', () => {
    const mockData = { id: '123', name: 'Product' };
    (useExternalService as jest.Mock).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
      fetchData: jest.fn(),
    });
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByText(/add to cart/i));
    expect(useExternalService).toHaveBeenCalledWith('addToCart', mockData);
  });

});