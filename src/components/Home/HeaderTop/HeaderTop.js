import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/doc/doc1.jpg';
const HeaderTop = () => {
    return (
        <div style={{ height: "600px", 'width': '100%' }} className="row d-flex align-items-center container">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 md-mx-5">
                <h1>Tu nueva sonrisa <br />comienza aquí</h1>
                <p className="text-secondary">Ingresa para pedir un turno con nuestro equipo de profesionales
                </p>
                <Link to="/appointment" className="btn btn-primary btn-lg shadow rounded"> Pedir turno</Link>

            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={chair} className="img-fluid rounded" alt="" />
            </div>
        </div>
    );
};

export default HeaderTop;