import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const BusinessInfo = () => {
    const InfoData = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit our location',
            description: 'Brookliyn, NY 10036, United States',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Contact us now',
            description: '+000 123 456789',
            icon: faPhone,
            background: 'primary'
        }
    ]
    return (
        <section className="container">
           <div className="row">
           {
                InfoData.map(info => <InfoCard info={info} />)
            }
           </div>
        </section>
    );
};

export default BusinessInfo;