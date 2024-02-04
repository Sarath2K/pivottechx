/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {BsCodeSlash, BsRocketFill} from "react-icons/bs";

export const Footer = () => {
    return (
        <div id="contact">
            <div className="contact-data p-5 d-none d-sm-block"></div>
            <div className="contact-data container-fluid">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="#" className="logo d-flex align-items-center">
                                <span><h4 className="text-white">Pivot TechX</h4></span>
                            </a>
                            <div className="pt-2">
                                <p className="m-2">
                                    Standing unique in the town, We become a renowned brand and a loveable app
                                    development company,for both employees and our clients.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6">
                            <h4>About Us</h4>
                            <div className="p-3">
                                <p><a href="#top" className="text-white"><BsCodeSlash size={16}/> Home</a></p>
                                <p><a href="#services" className="text-white"><BsCodeSlash size={16}/> Services</a></p>
                                <p><a href="#technology" className="text-white"><BsCodeSlash
                                    size={16}/> Technologies</a></p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6">
                            <h4>Our Services</h4>
                            <div className="p-3">
                                <p><BsCodeSlash size={16}/> Web Development</p>
                                <p><BsCodeSlash size={16}/> Ecommerce</p>
                                <p><BsCodeSlash size={16}/> Consultation</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-12 text-center text-md-start">
                            <h4>Contacts</h4>
                            <div className="p-3 d-flex justify-content-around">
                                <div className="d-flex flex-column justify-content-center">
                                    <BsRocketFill size={24}/>
                                </div>
                                <div>
                                    <p>Have Any Questions? Mail Us To</p>
                                    <a href="mailto:pivottechx@gmail.com"
                                       className="text-white">pivottechx@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-data p-3 d-none d-sm-block"></div>
                    <hr/>
                    <p className="text-center p-2">© Copyright 2024 Pivot TechX. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};
