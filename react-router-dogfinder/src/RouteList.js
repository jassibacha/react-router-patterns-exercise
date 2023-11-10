import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

function RouteList({ dogs }) {
    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
            <Route path="*" element={<Navigate to="/dogs" replace />} />
        </Routes>
    );
}

export default RouteList;
