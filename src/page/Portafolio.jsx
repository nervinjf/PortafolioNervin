import React, { useEffect } from 'react';
import neb from '../img/WebNEB.png'

const Portafolio = () => {



    return (
        <div className='all-portafolio hidden' id="porta">
            <div className='container-all-portafolio'></div>
            <div className='container-portafolio-title'>
                <h2>Portafolio</h2>
            </div>
            <div className='container-portafolio-content'>
                <div className='card-portafolio ecommerce'>
                    <div className='card-portafolio-title'><p>E-Commerce</p></div>
                    <div className='card-portafolio-descrip'>
                        <div className='card-portafolio-descrip-desapaecer'>
                        </div>
                            <div className='card-portafolio-descrip-icon-desaparecer'>
                                <div className='card-portafolio-descrip-icon'>
                                <div className='descrip-icon-content'>
                                    <i class="fa-brands fa-html5"></i>
                                    <p>HTML</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-css3-alt"></i>
                                    <p>CSS</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-react"></i>
                                    <p>REACT</p>
                                </div>
                                
                                
                                </div>
                            </div>
                            
                     </div>
                        <div className='portafolio-icon'>
                            <i class="fa-solid fa-arrow-right"></i>
                            <div className='portafolio-icon-text'>
                                <a href="https://e-commercen.netlify.app" target="/Blank" ><p>VER</p></a>
                            </div>
                        </div>
                </div>
                <div className='card-portafolio poke'>
                    <div className='card-portafolio-title'><p>Pokedex</p></div>
                    <div className='card-portafolio-descrip'>
                        <div className='card-portafolio-descrip-desapaecer'>
                        </div>
                            <div className='card-portafolio-descrip-icon-desaparecer'>
                                <div className='card-portafolio-descrip-icon'>
                                <div className='descrip-icon-content'>
                                    <i class="fa-brands fa-html5"></i>
                                    <p>HTML</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-css3-alt"></i>
                                    <p>CSS</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-react"></i>
                                    <p>REACT</p>
                                </div>
                                
                                
                                </div>
                            </div>
                            
                     </div>
                        <div className='portafolio-icon'>
                            <i class="fa-solid fa-arrow-right"></i>
                            <div className='portafolio-icon-text'>
                                <a href="https://pokedex-e.netlify.app" target="/Blank" ><p>VER</p></a>
                            </div>
                        </div>
                </div>
                <div className='card-portafolio rick' >
                    <div className='card-portafolio-title'><p>Rick and Morty</p></div>
                    <div className='card-portafolio-descrip'>
                        <div className='card-portafolio-descrip-desapaecer'>
                        </div>
                            <div className='card-portafolio-descrip-icon-desaparecer'>
                                <div className='card-portafolio-descrip-icon' >
                                <div className='descrip-icon-content'>
                                    <i class="fa-brands fa-html5"></i>
                                    <p>HTML</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-css3-alt"></i>
                                    <p>CSS</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-react"></i>
                                    <p>REACT</p>
                                </div>
                                
                                
                                </div>
                            </div>
                            
                     </div>
                        <div className='portafolio-icon'>
                            <i class="fa-solid fa-arrow-right"></i>
                            <div className='portafolio-icon-text'>
                                <a href="https://entregable-3.netlify.app" target="/Blank"><p>VER</p></a>
                            </div>
                        </div>
                </div>
                <div className='card-portafolio tiempo' >
                    <div className='card-portafolio-title'><p>Weather</p></div>
                    <div className='card-portafolio-descrip'>
                        <div className='card-portafolio-descrip-desapaecer'>
                        </div>
                            <div className='card-portafolio-descrip-icon-desaparecer'>
                                <div className='card-portafolio-descrip-icon'>
                                <div className='descrip-icon-content'>
                                    <i class="fa-brands fa-html5"></i>
                                    <p>HTML</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-css3-alt"></i>
                                    <p>CSS</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-react"></i>
                                    <p>REACT</p>
                                </div>
                                
                                
                                </div>
                            </div>
                            
                     </div>
                        <div className='portafolio-icon'>
                            <i class="fa-solid fa-arrow-right"></i>
                            <div className='portafolio-icon-text'>
                                <a href="https://deluxe-pie-d86dfe.netlify.app" target="/Blank" ><p>VER</p></a>
                            </div>
                        </div>
                </div>
                <div className='card-portafolio frases' >
                    <div className='card-portafolio-title'><p>Frases</p></div>
                    <div className='card-portafolio-descrip'>
                        <div className='card-portafolio-descrip-desapaecer'>
                        </div>
                            <div className='card-portafolio-descrip-icon-desaparecer'>
                                <div className='card-portafolio-descrip-icon'>
                                <div className='descrip-icon-content'>
                                    <i class="fa-brands fa-html5"></i>
                                    <p>HTML</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-css3-alt"></i>
                                    <p>CSS</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-react"></i>
                                    <p>REACT</p>
                                </div>
                                
                                
                                </div>
                            </div>
                            
                     </div>
                        <div className='portafolio-icon'>
                            <i class="fa-solid fa-arrow-right"></i>
                            <div className='portafolio-icon-text'>
                                <a href="https://entregable1r.netlify.app" target="/Blank" ><p>VER</p></a>
                            </div>
                        </div>
                </div>
                <div className='card-portafolio WebNEB' >
                    <div className='card-portafolio-title'><p>Pagina NEB</p></div>
                    <div className='card-portafolio-descrip'>
                        <div className='card-portafolio-descrip-desapaecer'>
                        </div>
                            <div className='card-portafolio-descrip-icon-desaparecer'>
                                <div className='card-portafolio-descrip-icon'>
                                <div className='descrip-icon-content'>
                                    <i class="fa-brands fa-html5"></i>
                                    <p>HTML</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-css3-alt"></i>
                                    <p>CSS</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-react"></i>
                                    <p>REACT</p>
                                </div>
                                
                                
                                </div>
                            </div>
                            
                     </div>
                        <div className='portafolio-icon'>
                            <i class="fa-solid fa-arrow-right"></i>
                            <div className='portafolio-icon-text'>
                                <a href="https://nebconnection.netlify.app" target="/Blank"><p>VER</p></a>
                            </div>
                        </div>
                </div>
                <div className='card-portafolio back' >
                    <div className='card-portafolio-title'><p>Backdrop Filter Generator</p></div>
                    <div className='card-portafolio-descrip'>
                        <div className='card-portafolio-descrip-desapaecer'>
                        </div>
                            <div className='card-portafolio-descrip-icon-desaparecer'>
                                <div className='card-portafolio-descrip-icon'>
                                <div className='descrip-icon-content'>
                                    <i class="fa-brands fa-html5"></i>
                                    <p>HTML</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-css3-alt"></i>
                                    <p>CSS</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-js"></i>
                                    <p>JS</p>
                                </div>
                                
                                
                                </div>
                            </div>
                            
                     </div>
                        <div className='portafolio-icon'>
                            <i class="fa-solid fa-arrow-right"></i>
                            <div className='portafolio-icon-text'>
                                <a href="https://generarbackdropfilter.netlify.app" target="/Blank"><p>VER</p></a>
                            </div>
                        </div>
                </div>  
                <div className='card-portafolio neb'>
                    
                    <div className='card-portafolio-title'><p>CRM</p></div>
                    <div className='card-portafolio-descrip'>
                        <div className='card-portafolio-descrip-desapaecer'>
                        </div>
                            <div className='card-portafolio-descrip-icon-desaparecer'>
                                <div className='card-portafolio-descrip-icon'>
                                <div className='descrip-icon-content' >
                                    <i class="fa-brands fa-html5"></i>
                                    <p>HTML</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-css3-alt"></i>
                                    <p>CSS</p>
                                </div>
                                <div className='descrip-icon-content'>
                                <i class="fa-brands fa-react"></i>
                                    <p>REACT</p>
                                </div>
                                
                                
                                </div>
                            </div>
                            
                     </div>
                        <div className='portafolio-icon'>
                            <i class="fa-solid fa-arrow-right"></i>
                            <div className='portafolio-icon-text'>
                            <a href="https://statuesque-pika-9cf959.netlify.app" target="/Blank"><p>VER</p></a>
                            </div>
                        </div>
                </div>             
            </div>
        </div>
    );
};

export default Portafolio;