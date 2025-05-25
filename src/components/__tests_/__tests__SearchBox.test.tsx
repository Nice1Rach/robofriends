import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '../SearchBox';

test('renders input and responds to typing', () => {
    const mockChange = jest.fn();
    render(<SearchBox searchChange={mockChange} searchValue="" ariaLabel="search robots" />);

    const input = screen.getByRole('searchbox', { name: /search robots/i });
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'john' } });
    expect(mockChange).toHaveBeenCalledTimes(1);
});
