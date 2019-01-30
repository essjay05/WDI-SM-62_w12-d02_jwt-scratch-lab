import React from 'react';
import './Layout.css';
import Navbar from './Navbar';

export default({ children }) => (
    <div>
        <Navbar />
        <main className="container">
            { children }
        </main>
    </div>
);