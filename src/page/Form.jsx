import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {

    // const { register, handleSubmit, reset } = useForm;

    // const send = (data) => {
    //     reset({
    //         "name": "",
    //         "phone": "",
    //         "email": "",
    //         "sms": ""
    //     });
    // }


    return (
        <div className='container-all-form hidden' id="form">
            <div className='Po-contacto'>
                <h2>Ponerse en contacto</h2>
            </div>
            <form action="https://formsubmit.co/nervinjflores@gmail.com" method="POST">
                <div className='container-form'>
                    <div className='container-form-item'>
                        <label >NOMBRE Y APELLIDO</label>
                        <input type="text"  name="name" /*{...register("name")}*//>
                    </div>
                    <div className='container-form-item'>
                        <label >TELEFONO</label>
                        <input type="tel" id="phone" name="phone" /*{...register("phone")}*//>
                    </div>
                    <div className='container-form-item'>
                        <label >CORREO</label>
                        <input type="email" name="email" /*{...register("email")}*//>
                    </div>
                    <div className='container-form-item'>
                        <label >MENSAJE</label>
                        <textarea type="text" colas="1300" rows="4" name="sms" /*{...register("sms")}*/ />
                    </div>
                    <button type="submit">ENVIAR</button>
                    <input type="hidden" name="_next" value="https://portafolio-nervin-flores.netlify.app"/>
                    <input type="hidden" name="_captcha" value="false"/>
                </div>
            </form>

        </div>
    );
};

export default Form;