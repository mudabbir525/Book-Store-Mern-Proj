import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this import is correct
import { BrowserRouter } from 'react-router-dom';
import { App } from './app.jsx'; // Import as named export
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
