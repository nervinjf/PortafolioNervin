import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../img/4085449.png'
import { changeTheme } from '../store/slice/theme.slice';

const Home = () => {

    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme)


    return (
        <div className='container-home hidden'>
            <nav>
                <img src={logo} alt="" width={"60px"}/>
                <input type="checkbox" id="toggle" checked={theme} onChange={e =>  dispatch(changeTheme(e.target.checked))}/>
                <label htmlFor="toggle">
                <i className="fa-regular fa-moon"></i>
                <i className=''s="fa-regular fa-sun"></i>
                </label>
                
                </nav>
            <section>
                <div className='container-a'>
                    <a href="">Home</a>
                    <a href="">About me</a>
                    <a href="">Skills</a>
                    <a href="">Portafolio</a>
                    <a href="">Contact me</a> 
                </div>
            </section>
            <section className='title'>
                <div className='container-title'>
                    <h2>Soy nervin flores</h2>
                    <h2>soy desarrolador web</h2>
                    <h2></h2>
                </div>
            </section>
            <div className='btn'>
                <button><i className="fa-brands fa-linkedin-in"></i></button>
                <button><i className="fa-brands fa-instagram"></i></button>
                <button></button>
            </div>
            <div className='box-blue'></div>
        </div>
    );
};

export default Home;