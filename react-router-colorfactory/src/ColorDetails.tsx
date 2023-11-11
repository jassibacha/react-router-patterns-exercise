import React from 'react';
import { useParams } from 'react-router-dom';
import { Color, ColorsProps } from './types';

// Create ColorDetails function for component
export default function ColorDetails({ colors }: ColorsProps) {
    const { color } = useParams();
    if (color) {
        const colorData = colors.find((c: Color) => c.name === color);
        if (colorData) {
            return (
                <div>
                    <h1>Color Details: {color}</h1>
                </div>
            );
        }
    }
    return null;
}
