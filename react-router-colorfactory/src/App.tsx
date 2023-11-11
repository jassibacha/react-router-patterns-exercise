import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import RouteList from './RouteList';
import { Color } from './types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';

function App() {
    const [colors, setColors] = useState<Color[]>([]);

    return (
        <BrowserRouter>
            <Header />
            <div className="container mt-5">
                <RouteList colors={colors} setColors={setColors} />
            </div>
        </BrowserRouter>
    );
}

export default App;
