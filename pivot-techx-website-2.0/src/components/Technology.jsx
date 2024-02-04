import React from "react";
import laravelLogo from "../assets/images/laravel-logo.png";
import reactLogo from "../assets/images/react-logo.png";

const Technology = () => {
    return (
        <div id="technology">
            <div className="tech-stack">
                <div className="jumbotron jumbotron-fluid tech-stack-jumbotron">
                    <div className="container p-4">
                        <div className="tech-stack-content">
                            <div className="row">
                                <div className="col-md-4 d-flex flex-column justify-content-center">
                                    <p className="tag">Tech That Drive Success</p>
                                    <h2>Revealing the technologies to shape your path to
                                        success.</h2>
                                    <p>We are committed to staying at the forefront of
                                        cutting-edge
                                        technology. Our dedication to innovation drives us to continuously explore
                                        and implement the latest advancements in the tech world.</p>
                                </div>
                                <div className="col-md-4 p-2">
                                    <div className="tech-stack-card bg-light p-4 d-flex align-items-start">
                                        <div>
                                            <img src={laravelLogo} className="tech-stack-logo img-fluid"/>
                                            <h4 className="pt-3">PHP on Laravel</h4>
                                            <p>A trusted framework for web development. Benefit from its vast
                                                community
                                                support and extensive toolkit, allowing you to create scalable and
                                                maintainable applications tailored to your business
                                                requirements.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 p-2">
                                    <div className="tech-stack-card bg-light p-4 d-flex align-items-start">
                                        <div>
                                            <img src={reactLogo} className="tech-stack-logo img-fluid"/>
                                            <h4 className="pt-3">React JS</h4>
                                            <p>A popular JavaScript library for creating interactive and engaging
                                                user interfaces. With its component-based architecture and efficient
                                                rendering,
                                                Reactjs empowers you to create applications that captivate
                                                users.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Technology;
