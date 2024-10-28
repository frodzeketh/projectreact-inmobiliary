// src/App.js
import React from 'react';
import Home from './home'; // Asegúrate de que la ruta sea correcta
import './css/style.css'; // Asegúrate de que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
    return (
        <div>
            <Home />
        </div>
    );
}

export default App;

