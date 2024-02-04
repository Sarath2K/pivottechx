import React from "react";
import howWeHelpYou from "../assets/images/how-we-help-you.jpg";
import {BsCodeSlash} from "react-icons/bs";

const HowWeHelpYou = () => {
    return (
        <div className="how-we-help-you">
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
                        <img src={howWeHelpYou} className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <p className="tag pt-2">How We Help You</p>
                        <h2>Unlock the power of business applications for optimal results.</h2>
                        <div className="how-we-help-you-right-content">
                            <p>
                                Our experienced team will ensure your business isn’t left behind in adopting the
                                latest technology. We act as your extended team, building and maintaining
                                scalable applications without delays or compromises on quality.
                            </p>
                        </div>
                        <div className="services-keys">
                            <div className="how-we-help-you-keys">
                                <BsCodeSlash style={{margin: '5px'}}/>
                                Time saving automation
                            </div>
                            <div className="how-we-help-you-keys">
                                <BsCodeSlash style={{margin: '5px'}}/>
                                Enhanced customer experience
                            </div>
                            <div className="how-we-help-you-keys">
                                <BsCodeSlash style={{margin: '5px'}}/>
                                Improved profit margin
                            </div>
                            <div className="how-we-help-you-keys">
                                <BsCodeSlash style={{margin: '5px'}}/>
                                Customized solutions
                            </div>
                            <div className="how-we-help-you-keys">
                                <BsCodeSlash style={{margin: '5px'}}/>
                                Enhance User Experience
                            </div>
                            <div className="how-we-help-you-keys">
                                <BsCodeSlash style={{margin: '5px'}}/>
                                Scalability & future-Proofing
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HowWeHelpYou;
