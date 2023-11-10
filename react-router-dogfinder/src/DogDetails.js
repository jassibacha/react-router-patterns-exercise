import React from 'react';
import { useParams } from 'react-router-dom';

function DogDetails() {
    const { name } = useParams();
    return <div>Details: {name}</div>;
}

export default DogDetails;
