import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import InformationCard from '../../../components/Home/InformationCard/InformationCard';
import React from 'react';

const infosData = [
    {
        title: 'Atención',
        description: '7 días de la semana',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visitanos',
        description: 'Balcarce 574, San Luis',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Llamanos',
        description: '+549 11 2154-4777',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75 infos-card">
                {
                    infosData.map(info => <InformationCard info={info} key={info.title}></InformationCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;