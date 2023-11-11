import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import ColorsList from './ColorsList';
import ColorDetails from './ColorDetails';
import AddColor from './AddColor';
import { ColorsSetProps } from './types';

function RouteList({ colors, setColors }: ColorsSetProps) {
    return (
        <Routes>
            <Route path="/colors" element={<ColorsList colors={colors} />} />
            <Route
                path="/colors/:color"
                element={<ColorDetails colors={colors} />}
            />
            <Route
                path="/colors/new"
                element={<AddColor setColors={setColors} />}
            />
            <Route path="*" element={<Navigate to="/colors" replace />} />
        </Routes>
    );
}

export default RouteList;
