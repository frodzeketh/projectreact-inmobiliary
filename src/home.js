import React from 'react';
import './css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'boxicons/css/boxicons.min.css';

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
                    <div className="custom-hamburger">
                        <button className="btn btn-primary btn-border" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            <i className='bx bx-menu icon-style'></i>
                        </button>
                        <a href="../index.html" className="custom-nav-logo-center">
                            <img className="logo-navbar" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
                        </a>
                        <button className="btn btn-primary btn-border" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <i className='bx bx-user icon-style'></i>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Offcanvas izquierda */}
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">A</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    Content on the left.
                </div>
            </div>

            {/* Offcanvas derecha */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">C</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    Content on the right.
                </div>
            </div>

            <div className="banner">
                <img 
                    src={`${process.env.PUBLIC_URL}/img/banner.png`} 
                    alt="Familia mudándose" 
                    className="banner-image" 
                />
                <div className="primary-wrapper">
                    <h1 className="site-title"><a href="#">Mucho más que mudarte</a></h1>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Alquilar</label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Comprar</label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Emprendimientos</label>
                    </div>

                    <div className="input-group mt-4">
                        <input type="text" className="form-control" placeholder="¿Donde quieres mudarte?" aria-label="¿Donde quieres mudarte?" />
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tipo de propiedad
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button className="btn btn-outline-secondary" type="button"><i className='bx bx-search icon-search'></i> </button> 
                    </div>
                </div>
            </div>

            {/* Sección de noticias (Cards) */}
            <div className="cards-inicio-container">
                <div className="cards-inicio-posts">
                    <div className="cards-inicio-post">
                        <div className="cards-inicio-post__image cards-inicio-post__image--1"></div>
                        <div className="cards-inicio-post__content">
                            <div className="cards-inicio-post__inside">
                                <h3 className="cards-inicio-post__title">
                                    <img src={`${process.env.PUBLIC_URL}/img/logo2.png`} alt="" className="logo-cards" />
                                </h3>
                                <p className="cards-inicio-post__excerpt">
                                    Inmuebles extraordinarios dirigidos y supervisados por Corredores Públicos matriculados, especializados en la compra y venta de propiedades premium.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cards-inicio-post">
                        <div className="cards-inicio-post__image cards-inicio-post__image--2"></div>
                        <div className="cards-inicio-post__content">
                            <div className="cards-inicio-post__inside">
                                <h3 className="cards-inicio-post__title">
                                    <img src={`${process.env.PUBLIC_URL}/img/logo2.png`} alt="" className="logo-cards" />
                                </h3>
                                <p className="cards-inicio-post__excerpt">
                                    Inmuebles extraordinarios dirigidos y supervisados por Corredores Públicos matriculados, especializados en la compra y venta de propiedades premium.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenedor del logo de inicio */}
            <div className="logo__inicio-container">
                <img 
                    src={`${process.env.PUBLIC_URL}/img/logo2.png`} 
                    alt="Logo TSP Asesorías" 
                    className="logo__inicio-image" 
                />
            </div>

            {/* Nueva sección de tarjetas vectoriales */}
            <div className="container-cards-vector">
                <div className="row-cards-vector">
                    <div className="col-cards-vector">
                        <div className="card-cards-vector">
                            <img src={`${process.env.PUBLIC_URL}/img/vector1.png`} className="card-img-top-cards-vector" alt="..." />
                            <div className="card-body-cards-vector">
                                <h5 className="card-title-cards-vector">Franquicias</h5>
                                <p className="card-text-cards-vector">Hay una franquicia ARRIENDOS para ti también. Enterate cómo podés empezar.</p>
                                <button class="btn btn-primary" type="button">Button</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-cards-vector">
                        <div className="card-cards-vector">
                            <img src={`${process.env.PUBLIC_URL}/img/vector1.png`} className="card-img-top-cards-vector" alt="..." />
                            <div className="card-body-cards-vector">
                                <h5 className="card-title-cards-vector">Encuesta de calidad</h5>
                                <p className="card-text-cards-vector">Enviá tu opinión sobre la experiencia que viviste con un equipo de la Red ARRIENDOS</p>
                                <button class="btn btn-primary" type="button">Button</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-cards-vector">
                        <div className="card-cards-vector">
                            <img src={`${process.env.PUBLIC_URL}/img/vector1.png`} className="card-img-top-cards-vector" alt="..." />
                            <div className="card-body-cards-vector">
                                <h5 className="card-title-cards-vector">Unite a la Red ARRIENDOS</h5>
                                <p className="card-text-cards-vector">Súmate a una oficina adherida a la Red más exitosa del mundo.</p>
                                <button class="btn btn-primary" type="button">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__addr">
                <h1 className="footer__logo">
                        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" className="logo-footer" />
                    </h1>
                    
                    <h2 className="nav__title">Servicios</h2>
                    <ul className="nav__ul">
                        <li><a href="#">Comprar</a></li>
                        <li><a href="#">Alquilar</a></li>
                        <li><a href="#">Vender</a></li>
                        <li><a href="#">Emprender</a></li>
                        <li><a href="#">Información</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                    </ul>

                    <address>
                        <a className="footer__btn" href="mailto:example@gmail.com">Correo electrónico</a>
                    </address>
                </div>

                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Encuentra más propiedades</h2>
                        <ul className="nav__ul">
                            <li><a href="#">Propiedades en Santiago</a></li>
                            <li><a href="#">Propiedades en Viña del Mar</a></li>
                            <li><a href="#">Propiedades en Antofagasta</a></li>
                            <li><a href="#">Propiedades en Arica</a></li>
                            <li><a href="#">Propiedades en Atacama</a></li>
                        </ul>
                    </li>
                </ul>

                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Propiedades en Alquiler</h2>
                        <ul className="nav__ul">
                            <li><a href="#">Departamentos en alquiler en Santiago</a></li>
                            <li><a href="#">Casas en alquiler en Valparaíso</a></li>
                            <li><a href="#">Casas en alquiler en Concepción</a></li>
                            <li><a href="#">Casas en alquiler en La Serena</a></li>
                            <li><a href="#">Casas en alquiler en Antofagasta</a></li>
                            <li><a href="#">Casas en alquiler en Temuco</a></li>
                            <li><a href="#">Casas en alquiler en Viña del Mar</a></li>
                            <li><a href="#">Casas en alquiler en Rancagua</a></li>
                        </ul>
                    </li>
                </ul>

                <ul className="footer__nav">
                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">Redes Sociales</h2>
                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                <a href="https://www.instagram.com/tu_cuenta" target="_blank" className="social-icon">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.facebook.com/tu_cuenta" target="_blank" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="legal">
                    <p>&copy; 2024 | Copy</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
