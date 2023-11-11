import React from 'react';
import { Link } from 'react-router-dom';
import { Color, ColorsProps } from './types';

export default function ColorsList({ colors }: ColorsProps) {
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
