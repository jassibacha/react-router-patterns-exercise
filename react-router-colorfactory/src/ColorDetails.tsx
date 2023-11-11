import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
                    <div
                        className="color-bg"
                        style={{
                            backgroundColor: colorData.color,
                            width: '400px',
                            height: '200px',
                        }}
                    >
                        &nbsp;
                    </div>
                    <Link to="/colors" className="btn btn-primary mt-3">
                        Back to colors
                    </Link>
                </div>
            );
        }
    }
    return null;
}
