import React from 'react';
import { render } from '@testing-library/react';
import ColorsList from '../ColorsList';
import { MemoryRouter } from 'react-router-dom';

test('renders ColorsList component without crashing', () => {
    const colors = [{ name: 'red', color: '#FF0000' }];
    render(
        <MemoryRouter>
            <ColorsList colors={colors} />
        </MemoryRouter>
    );
});
