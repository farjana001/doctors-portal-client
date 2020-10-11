import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center p-5">
            <img style={{height:'50px'}} className="img-fluid my-3" src={service.img} alt="" />
            <h5>{service.name}</h5>
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis ut sit fugiat quod quidem!</p>
        </div>
    );
};

export default ServiceDetail;