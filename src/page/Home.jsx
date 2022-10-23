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
                    <a href="#home">inicio</a>
                    <a href="#about">Sobre mi</a>
                    <a href="#skill">habilidades</a>
                    <a href="#porta">Portafolio</a>
                    <a href="#form">Contactame</a>
                </div>
            </section>
            <section className='title'>
                <div className='container-title'>
                    <h2>Soy <span className='type'></span></h2>
                    <h2></h2>
                </div>
            </section>
            <div className='btn'>
                <a href="https://www.linkedin.com/in/nervin-flores-887354151/"><button><i className="fa-brands fa-linkedin-in"></i></button></a>
                <a href=""><button><i className="fa-brands fa-instagram"></i></button></a>
                <a href='https://drive.google.com/uc?id=17kmPlRtXQr9o8xATXxtqvfu5q73B1Z1B&export=download' download><button><i class="fa-solid fa-file-arrow-down"></i></button></a>
            </div>
            <div className='box-blue'></div>
        </div>
    );
};

export default Home;