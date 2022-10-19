import React from 'react';
import { useEffect } from 'react';

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
        <div className='container-about hidden'>
            <main>
                <div className='container-about-pt1'>
                    <div className='box-blue2'>
                        <div className='about'>
                            <h1>About <br /> me</h1> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nostrum mollitia aut nemo? Assumenda cupiditate obcaecati, harum totam nihil ratione, natus ut vitae temporibus laudantium itaque, at ducimus maiores ab.</p>
                      </div>
                    </div>
                    <div className='circle'></div>
                    <div className='items-aboutme'>
                        <div className='items-aboutme-pt1'>
                            <div className='aboutme-items'>
                                <h2>Birthay:</h2>
                                <p>10-11-1999</p>
                            </div>
                            <div className='aboutme-items'  >
                                <h2>age:</h2>
                                <p>22 years old</p>
                            </div>
                        </div>
                        <div className='items-aboutme-pt1'>
                            <div className='aboutme-items'>
                                <h2>Educacion:</h2>
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
                    <button>CONTACTO</button>
                    <button><i class="fa-solid fa-file-arrow-down"></i> DESCARGAR CV</button>
                </div>
            </main>
        </div>
    );
};

export default About;