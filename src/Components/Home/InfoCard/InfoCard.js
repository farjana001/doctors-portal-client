import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css';


const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-white">
            <div className={`info-container d-flex justify-content-center align-items-center info-${info.background}`}>
                <div className='mr-3'>
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div>
                    <h6 className="">
                        {info.title}
                    </h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;