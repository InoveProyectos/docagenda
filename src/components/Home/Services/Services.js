import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/teath.png';
import ServiceDetail from '../../../components/Home/ServiceDetail/ServiceDetail';
import './Services.css';

const serviceData = [
    {
        name: 'Tratamiento de Fluor',
        img: flouride,
        desc:'Realizamos control, limpieza y tratamientos de fluor'
    },
    {
        name: 'Implantes',
        img: cavity,
        desc:'Realizamos implantes de alta calidad'
    },
    {
        name: 'Blanqueo dental',
        img: teath,
        desc:'Realizamos blanqueamiento dental'
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5" id="serviceContaint">
            <div className="text-center">
                <h5 className="brand-color">Nuestros servicios</h5>
                <h2>Qué proveemos</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 row">
                    {
                        serviceData.map(service =><ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;