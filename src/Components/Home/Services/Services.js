import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section  style={{marginTop:'120px'}} className='services-container'>
            <div className="text-center">
                <h5 style={{color: '#1cc7c1'}}>OUR SERVICES</h5>
                <h2 style={{color: '#3a4256'}}>Services we provide</h2>
            </div>
           
                <div className="row d-flex justify-content-center align-items-center p-5 mt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} />)
                    }
                </div>
            
        </section>
    );
};

export default Services;