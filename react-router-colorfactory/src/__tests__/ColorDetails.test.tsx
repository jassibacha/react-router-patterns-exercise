import React from 'react';
import { render } from '@testing-library/react';
import ColorDetails from '../ColorDetails';
import { MemoryRouter } from 'react-router-dom';

test('renders ColorDetails component without crashing', () => {
    const colors = [{ name: 'Red', color: '#FF0000' }];
    render(
        <MemoryRouter>
            <ColorDetails colors={colors} />
        </MemoryRouter>
    );
});
