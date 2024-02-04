/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {APP_TITLE} from '../constants/constants';
import logoImgPTS from '../../src/assets/images/32.png';

export const Header = () => {
    return (
        <div>
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="#" className="logo">
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src={logoImgPTS} alt="Logo"
                                             style={{width: '50px', marginRight: '10px'}}/>
                                        <h4 style={{display: 'inline-block', verticalAlign: 'middle'}}>
                                            {APP_TITLE}{" "}
                                            {/*<span classNameName="logo3">Services</span>*/}
                                        </h4>
                                    </div>
                                </a>

                                <ul className="nav">
                                    <li className="scroll-to-section">
                                        <a href="#top" className="active">Home</a>
                                    </li>
                                    <li className="scroll-to-section">
                                        <a href="#services">Services</a>
                                    </li>
                                    <li className="scroll-to-section">
                                        <a href="#technology">Technolgy</a>
                                    </li>
                                    <li className="scroll-to-section">
                                        <div className="main-red-button">
                                            <a href="#contact">Contact Now</a>
                                        </div>
                                    </li>
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
