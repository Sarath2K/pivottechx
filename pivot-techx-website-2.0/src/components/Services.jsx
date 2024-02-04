import React from "react";
import {servicesOffered} from '../constants/constants';

const Services = () => {
    return (
        <div className="what-we-offer" id="services">
            <div className="container container-service p-4">
                <p className="tag">What We Offer</p>
                <h2>Empowering success through diverse application <br/> development
                    solutions.</h2>
                <p className="tag-services p-3">Leverage the transformative power of digital applications to drive
                    your business growth. By embracing technology, stay ahead of the competition and unlock new
                    possibilities for success in today’s digital age.</p>
                <div className="row pt-4">
                    {servicesOffered.map((service, index) => (
                        <div className="col-md-4">
                            <div className="card-services pb-4">
                                <div className="text-center pt-4 pb-2">
                                    <div className="services-icons">{service.icon}</div>
                                </div>
                                <h2 className="text-center px-3"> {service.title} </h2>
                                <p className="text-center">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Services;
