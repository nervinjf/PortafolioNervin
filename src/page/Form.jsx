import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {



    return (
        <div className='container-all-form hidden' id="form">
            <div className='Po-contacto'>
                <h2>Ponerse en contacto</h2>
            </div>
            <form name="contacto" netlify>
                <div className='container-form'>
                    <div className='container-form-item'>
                        <label htmlFor="">NOMBRE Y APELLIDO</label>
                        <input type="text" />
                    </div>
                    <div className='container-form-item'>
                        <label htmlFor="">TELEFONO</label>
                        <input type="tel" id="phone" name="phone"/>
                    </div>
                    <div className='container-form-item'>
                        <label htmlFor="">CORREO</label>
                        <input type="email" />
                    </div>
                    <div className='container-form-item'>
                        <label htmlFor="">MENSAJE</label>
                        <textarea type="text" colas="1300" rows="4" />
                    </div>
                    <button>ENVIAR</button>
                </div>
            </form>

        </div>
    );
};

export default Form;