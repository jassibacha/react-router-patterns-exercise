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
        <>
            <h1>Add A New Color</h1>
            <form onSubmit={handleSubmit} className="mb-3">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="color" className="form-label">
                        Color:
                    </label>
                    <input
                        type="color"
                        className="form-control form-control-color"
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        title="Choose your color"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Add a new color!
                </button>
            </form>
        </>
    );
}
