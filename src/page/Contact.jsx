import React from 'react';

const Contact = () => {
    return (
        <div className='container-contact hidden' id="contact">
            <h2>Contacto</h2>
            <div className='container-contact-info'>
                <div className='container-contact-info-item'>
                    <div className='box-contact'><i class="fa-solid fa-phone"></i></div>
                    <div className='container-contact-item'>
                        <p><b>Teléfono </b> </p>
                        <p>+58 412-201-0470</p>
                    </div>
                </div>
                <div className='container-contact-info-item'>
                <div className='box-contact'><i class="fa-solid fa-envelope"></i></div>
                    <div className='container-contact-item'>
                        <p><b> Correo</b></p>
                        <p>nervinjflores@gmail.com</p>
                    </div>
                </div>
                <div className='container-contact-info-item'>
                <div className='box-contact'><i class="fa-solid fa-location-dot"></i></div>
                    <div className='container-contact-item'>
                        <p><b>Dirección</b> </p>
                        <p>Caracas, Venezuela</p>
                    </div>
                </div>
            </div>
            <div className='container-contact-btn'>
            <a href="https://drive.google.com/uc?id=17kmPlRtXQr9o8xATXxtqvfu5q73B1Z1B&export=download"><button><i class="fa-solid fa-file-arrow-down"></i> DESCARGAR CV</button></a>
            </div>
        </div>
    );
};

export default Contact;