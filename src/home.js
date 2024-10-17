// src/home.js
import React from 'react';
import './css/style.css'; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Asegúrate de tener instalada la biblioteca FontAwesome

const Home = () => {
    return (
        <div>
            <header className="custom-header">
                <nav className="custom-navbar">
                    <ul className="custom-nav-menu">
                        <li className="custom-nav-item">
                            <a href="./index.html" className="custom-nav-link">Inicio</a>
                        </li>
                        <li className="custom-nav-item">
                            <a href="./pages/alquileres.html" className="custom-nav-link">Alquilar</a>
                        </li>
                        <li className="custom-nav-item">
                            <a href="./pages/comprar.html" className="custom-nav-link">Comprar</a>
                        </li>
                        <li className="custom-nav-item">
                            <a href="#" className="custom-nav-link">Emprendimientos</a>
                        </li>
                        <li className="custom-nav-item">
                            <a href="./pages/blog.html" className="custom-nav-link">Blog</a>
                        </li>
                        <li className="custom-nav-item">
                            <a href="./pages/contacto.html" className="custom-nav-link">Contacto</a>
                        </li>
                    </ul>
                    <button className="custom-login-button">Iniciar sesión</button>

                    {/* Botón del menú hamburguesa para responsive */}
                    <div className="custom-hamburger">
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            Toggle left
                        </button>

                        <a href="../index.html" className="custom-nav-logo-center">
                            <img className="logo-navbar" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
                        </a>

                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            Toggle right
                        </button>
                    </div>
                </nav>
            </header>

            {/* Offcanvas izquierda */}
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas Left</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    Content on the left.
                </div>
            </div>

            {/* Offcanvas derecha */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas Right</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    Content on the right.
                </div>
            </div>

            {/* Banner */}
            <div className="banner">
                <img 
                    src={`${process.env.PUBLIC_URL}/img/banner.png`} 
                    alt="Familia mudándose" 
                    className="banner-image" 
                />
                <div className="primary-wrapper">
                    <h1 className="site-title"><a href="#">Mucho más que mudarte</a></h1>
                    
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            id="btnradio1" 
                            autoComplete="off" 
                            defaultChecked 
                        />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Alquilar</label>

                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            id="btnradio2" 
                            autoComplete="off" 
                        />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Comprar</label>

                        <input 
                            type="radio" 
                            className="btn-check" 
                            name="btnradio" 
                            id="btnradio3" 
                            autoComplete="off" 
                        />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Emprendimientos</label>
                    </div>

                    {/* Input y dropdown */}
                    <div className="input-group mt-4">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="¿Donde quieres mudarte?" 
                            aria-label="¿Donde quieres mudarte?" 
                        />
                        <div className="dropdown">
                            <button 
                                className="btn btn-secondary dropdown-toggle" 
                                type="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button className="btn btn-outline-secondary" type="button">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
