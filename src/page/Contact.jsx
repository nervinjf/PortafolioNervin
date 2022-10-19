import React from 'react';

const Contact = () => {
    return (
        <div className='container-contact hidden'>
            <h2>Contacto</h2>
            <div className='container-contact-info'>
                <div className='container-contact-info-item'>
                    <div className='box-contact'></div>
                    <div className='container-contact-item'>
                        <p><b>Telefono </b> </p>
                        <p>+58 412-201-0470</p>
                    </div>
                </div>
                <div className='container-contact-info-item'>
                <div className='box-contact'></div>
                    <div className='container-contact-item'>
                        <p><b> Correo</b></p>
                        <p>nervinjflores@gmail.com</p>
                    </div>
                </div>
                <div className='container-contact-info-item'>
                <div className='box-contact'></div>
                    <div className='container-contact-item'>
                        <p><b>Direccion</b> </p>
                        <p>Caracas, Venezuela</p>
                    </div>
                </div>
            </div>
            <div className='container-contact-btn'>
            <button><i class="fa-solid fa-file-arrow-down"></i> DESCARGAR CV</button>
            </div>
        </div>
    );
};

export default Contact;