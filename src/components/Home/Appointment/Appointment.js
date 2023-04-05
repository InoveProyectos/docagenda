import React from 'react';
import doctor from '../../../images/doctor.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment my-5">
            <div className="container">
            <div className="row ">
                <div className="col-md-5 d-none d-md-block">
                    <img src={doctor} alt="" />
                </div>
                <div className="col-md-7 text-white py-5">
                    <h5 className="brand-color text-uppercase">Agenda</h5>
                    <h1 className="">Pide un turno <br/> hoy </h1>
                    <p>No esperes más, la salud no espera. Realiza al menos una consulta semestral para mantener tus sonrisa fresca y sena</p>
                    <button className="btn btn-primary">Leer más</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Appointment;