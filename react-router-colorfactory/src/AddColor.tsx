import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Color } from './types';

interface AddColorProps {
    setColors: React.Dispatch<React.SetStateAction<Color[]>>;
}
export default function AddColor({ setColors }: AddColorProps) {
    const INITIAL_STATE = {
        name: '',
        color: '',
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const navigate = useNavigate();

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setColors((oldColors) => [...oldColors, formData]); // Update this line
        navigate('/colors');
    };

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <label htmlFor="color">Color:</label>
            <input
                type="color"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />

            <button>Add a new color!</button>
        </form>
    );
}
