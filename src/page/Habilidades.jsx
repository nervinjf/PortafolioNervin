import React from 'react';
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import react from '../img/react.png'
import redux from '../img/redux.png'
import git from '../img/git.png'
import boot from '../img/Bootstrap.png'


const Habilidades = () => {

    return (
        <div>
            <div className='hidden container-all-hbl-tech' >
                <div className='container-hbl'>
                    <div className='container-hbl-items '>
                        <div className='grid-hbl '>
                            <div className='box-hbl'>
                                <h1>1</h1>
                            </div>
                            <div className='box-hbl'>
                                <h1>2</h1>
                            </div>
                            <div className='box-hbl'>
                                <h1>3</h1>
                            </div>
                            <div className='box-hbl'>
                                <h1>4</h1>
                            </div>
                            <div className='box-hbl'>
                                <h1>5</h1>
                            </div>
                            <div className='box-hbl'>
                                <h1>6</h1>
                            </div>
                            <div className='box-hbl'>
                                <h1>7</h1>
                            </div>
                        </div>
                    </div>
                    <div className='habi'>
                        <div className='box-blue3'>
                            <h1>habilidades<br />e intereses</h1>
                        </div>
                    </div>
                </div >
                <div className='container-tech'>
                    <div className='container-tech-items'>
                        <div className='tech'>
                            <div className='box-blue4'>
                                <h1>tecnologias</h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid-tech'>
                        <div className='box-tech'>
                        <img src={html} alt="" width="100%"/>
                        <h1>HTML</h1>
                        </div>
                        <div className='box-tech'>
                        <img src={css} alt="" width="85%"/>
                        <h1>CSS</h1>
                        </div>
                        <div className='box-tech'>
                        <img src={js} alt="" width="180%"/>
                        <h1>JavaScript</h1>
                        </div>
                        <div className='box-tech'>
                        <img src={react} alt="" width="100%"/>
                        <h1>React</h1>
                        </div>
                        <div className='box-tech'>
                        <img src={redux} alt="" width="100%"/>
                        <h1>Redux</h1>
                        </div>
                        <div className='box-tech'>
                        <img src={git} alt="" width="100%"/>
                        <h1>GIT</h1>
                        </div>
                        <div className='box-tech'>
                        <img src={boot} alt="" width="150%"/>
                        <h1>Bootstrap</h1>
                        </div>
                    </div>
                </div>
                <div className='interested'>
                    <p>Are you interested in working with me? Let’s get started now</p>
                </div>
            </div>
            
        </div >
    );
};

export default Habilidades;