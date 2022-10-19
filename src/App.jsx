import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './style/sttle-1536.css'
import './style/Home.css'
import './style/About.css'
import './style/Contact.css'
import './style/Form.css'
import './style/Freelancer.css'
import './style/Habilidades.css'
import './style/Portafolio.css'
import './style/Normalizar.css'
import Home from './page/Home'
import About from './page/About'
import Habilidades from './page/habilidades'
import Freelancer from './page/Freelancer'
import Portafolio from './page/Portafolio'
import Contact from './page/Contact'
import Form from './page/Form'
import {useSelector} from 'react-redux'


function App() {

  const theme = useSelector(state => state.theme)

  useEffect(() =>{
    document.body.setAttribute('data-theme', theme);
  }, [theme])

  useEffect(() =>{
    const hiddenElement = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(
        (entries) =>{
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                }else{
                    entry.target.classList.remove("show");
                }
            })
        },{
            threshold: 0.5,
        }
    );
    console.log(hiddenElement)
    hiddenElement.forEach(element => observer.observe(element))
}, [])

  return (
    <>
    <Home/>
    <About/>
    <Habilidades/>
    <Freelancer/>
    <Portafolio/>
    <Contact/>
    <Form/>
    </>
  )
}

export default App
