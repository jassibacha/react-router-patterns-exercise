import React from 'react';
import { Link } from 'react-router-dom';

// create a header function component and return a div
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/colors">
                    ColorSave.io
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/colors">
                                List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/colors/new">
                                Add Color
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
