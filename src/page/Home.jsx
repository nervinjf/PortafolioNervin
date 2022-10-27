import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../img/4085449.png'
import { changeTheme } from '../store/slice/theme.slice';

const Home = () => {

    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme)

    useEffect(() => {
        const typed = new Typed('.type', {
            strings: ['Nervin Flores', 'Desarrollador WEB'],
            typeSpeed: 75,
            startDelay: 0,
            backSpeed: 75,
            // smartBackspace: true,
            shuffle: false,
            // backDelay: 300,
            loop: true,
            // loopCount: Infinity,
            // showCursor: true,
            cursorChar: '|',
            // contentType: 'html',

        })
    }, [])




    return (
        <div className='container-home hidden' id="home">
            <nav>
                <img src={logo} alt="" width={"60px"} />
                <input type="checkbox" id="toggle" checked={theme} onChange={e => dispatch(changeTheme(e.target.checked))} />
                <label htmlFor="toggle">
                    <i className="fa-regular fa-moon"></i>
                    <i className="fa-regular fa-sun"></i>
                </label>
            </nav>


            <section>
                <div className='container-a'>
                    <a href="#home">INICIO</a>
                    <a href="#about">SOBRE MI</a>
                    <a href="#skill">HABILIDADES</a>
                    <a href="#porta">PORTAFOLIO</a>
                    <a href="#form">CONTACTO</a>
                </div>
            </section>
            <section className='title'>
                <div className='container-title'>
                    <h2>Soy <span className='type'></span></h2>
                    <h2></h2>
                </div>
            </section>
            <div className='btn'>
                <a href="https://www.linkedin.com/in/nervin-flores-887354151/" target="/Blank"><button><i className="fa-brands fa-linkedin-in"></i></button></a>
                <a href='https://drive.google.com/uc?id=1dckzZmegYasW-bggGOhSQAj_7FKxE8la&export=download' download><button><i class="fa-solid fa-file-arrow-down"></i></button></a>
            </div>
            <div className='box-blue'></div>
        </div>
    );
};

export default Home;