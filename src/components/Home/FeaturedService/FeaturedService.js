import React from 'react';
// import baby from '../../../images/baby.png';
import baby from '../../../images/doc/doctor chair 2.jpg';


const FeaturedService = () => {
    return (
        <div className="feature-service pb-0 pb-md-5 pt-md-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5 col-sm-6 col-12">
                        <img src={baby} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-7 col-sm-6 col-12 align-self-center">
                        <h1>Excelencia dental, es nuestro lema</h1>
                        <p className="text-primary my-5">Contamos con las últimas tecnologías y procesos en cuidado dental.
                        Nuestros profesionales están capacitados en las últimas tendencias.
                        Brindamos una atención personalizada con una gran disponibilidad de turnos y la posibilidad
                        de programar de manera online su visita.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;