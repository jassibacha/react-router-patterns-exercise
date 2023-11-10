import React from 'react';
import { useParams } from 'react-router-dom';

function DogDetails({ dogs }) {
    const { name } = useParams();

    if (name) {
        const dog = dogs.find(
            (d) => d.name.toLowerCase() === name.toLowerCase()
        );
        return (
            <div>
                <h1>{dog.name}</h1>
                <p>Age: {dog.age}</p>
                Facts:
                <ul>
                    {dog.facts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                    ))}
                </ul>
            </div>
        );
    }

    return null;
}

export default DogDetails;
