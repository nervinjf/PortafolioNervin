import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {


    useEffect(() =>{
        const hiddenElement = document.querySelector(".container-about");

        const observer = new IntersectionObserver(
            (entries) =>{
                entries.forEach(entry =>{
                    if(entry.isIntersecting){
                        entry.target.classList.add("show");
                    }
                    // }else{
                    //     // entry.target.classList.revome("hidden");
                    // }
                })
            },{
                threshold: 0.5,
            }
        );
        console.log(hiddenElement)
        observer.observe(hiddenElement)
    }, [])

    

    return (
        <div className='container-about hidden' id="about">
            <main>
                <div className='container-about-pt1'>
                    <div className='box-blue2'>
                        <div className='about'>
                            <h1>Sobre mi</h1> 
                            <p>Me llamo Nervin Flores, me apasiona el mundo "TI" y actualmente, soy Desarrollador Web Full Stack, soy dedicado y creativo, en constante búsqueda de mejorar
                             personal y profesionalmente. Me interesa seguir adquiriendo más conocimientos y perfeccionar los ya obtenidos.</p>
                      </div>
                    </div>
                    <div className='circle'></div>
                    <div className='items-aboutme'>
                        <div className='items-aboutme-pt1'>
                            <div className='aboutme-items'>
                                <h2>Cumpleaños:</h2>
                                <p>10-11-1999</p>
                            </div>
                            <div className='aboutme-items'  >
                                <h2>Edad:</h2>
                                <p>22 Años</p>
                            </div>
                        </div>
                        <div className='items-aboutme-pt1'>
                            <div className='aboutme-items'>
                                <h2>Educación:</h2>
                                <p>Academlo</p>
                            </div>
                            <div className='aboutme-items'>
                                <h2>Experiencia:</h2>
                                <p>NEB</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='container-btn-about'>
                    <a href="#form"><button>CONTACTO</button></a>
                    <a href="https://drive.google.com/uc?id=17kmPlRtXQr9o8xATXxtqvfu5q73B1Z1B&export=download"><button><i class="fa-solid fa-file-arrow-down"></i> DESCARGAR CV</button></a>
                </div>
            </main>
        </div>
    );
};

export default About;