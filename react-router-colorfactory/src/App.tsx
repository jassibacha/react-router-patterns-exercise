import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import RouteList from './RouteList';
import { Color } from './types';
import './App.css';

function App() {
    const [colors, setColors] = useState<Color[]>([]);

    return (
        <BrowserRouter>
            <div className="container">
                <RouteList colors={colors} setColors={setColors} />
            </div>
        </BrowserRouter>
    );
}

export default App;
