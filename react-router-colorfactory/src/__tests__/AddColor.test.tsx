import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddColor from '../AddColor';
import { MemoryRouter } from 'react-router-dom';

test('renders AddColor component without crashing', () => {
    const mockSetColors = jest.fn();
    render(
        <MemoryRouter>
            <AddColor setColors={mockSetColors} />
        </MemoryRouter>
    );
});

// test('allows users to add a new color', () => {
//     const mockSetColors = jest.fn();
//     render(
//         <MemoryRouter>
//             <AddColor setColors={mockSetColors} />
//         </MemoryRouter>
//     );

//     // Simulate user filling out the form
//     const nameInput = screen.getByLabelText(/name/i);
//     const colorInput = screen.getByLabelText(/color/i);
//     fireEvent.change(nameInput, { target: { value: 'blue' } });
//     fireEvent.change(colorInput, { target: { value: '#0000FF' } });

//     // Simulate form submission
//     fireEvent.click(screen.getByText(/add a new color!/i));

//     // Check if setColors was called correctly
//     expect(mockSetColors).toHaveBeenCalledTimes(1);
//     expect(mockSetColors).toHaveBeenCalledWith(
//         expect.arrayContaining([
//             expect.objectContaining({ name: 'blue', color: '#0000FF' }),
//         ])
//     );
// });
