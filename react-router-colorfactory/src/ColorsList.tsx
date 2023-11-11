import React from 'react';
import { Link } from 'react-router-dom';
import { ColorsProps } from './types';

export default function ColorsList({ colors }: ColorsProps) {
    if (colors.length === 0) {
        // Show a message and a link to add a new color if the array is empty
        return (
            <div>
                <p>No colors added yet. Why not add some?</p>
                <Link to="/colors/new" className="btn btn-primary">
                    Add a Color
                </Link>
            </div>
        );
    }

    return (
        <ul>
            {colors.map((color) => (
                <li key={color.name}>
                    <Link to={`/colors/${color.name}`}>{color.name}</Link>
                </li>
            ))}
        </ul>
    );
}
