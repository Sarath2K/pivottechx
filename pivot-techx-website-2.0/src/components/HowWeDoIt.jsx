import React from "react";
import {BsCode} from "react-icons/bs";
import {Nav, Tab} from "react-bootstrap";

const HowWeDoIt = () => {
    return (
        <div className="how-we-do-it">
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-7 d-flex flex-column justify-content-center">
                        <p className="tag">How We Do It</p>
                        <h2>We make technology work for your business.</h2>
                        <p className="text-justify">We understand the importance of a smooth and efficient
                            collaboration process to ensure
                            the successful development of your project. Our streamlined process is designed to
                            foster clear communication, effective planning, and seamless execution, from the
                            initial
                            stages to the final delivery.</p>
                    </div>
                    <div className="col-md-5 p-2">
                        <Tab.Container id="pills-tab" defaultActiveKey="pills-step1">
                            <div className="d-flex justify-content-center">
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="pills-step1" className="custom-link">Step 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="pills-step2" className="custom-link">Step 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="pills-step3" className="custom-link">Step 3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>

                            <Tab.Content>
                                <Tab.Pane eventKey="pills-step1">
                                    <div className="how-we-do-it-card bg-light mt-4 p-4 d-flex align-items-start">
                                        <div>
                                            <BsCode size={35}/>
                                            <h4 className="pt-3">Schedule a consultation with us.</h4>
                                            <p>To schedule a consultation, simply fill out the form and provide
                                                project details, goals, and requirements. Our team will promptly
                                                reach out to you, equipped with the necessary pre-work for the call,
                                                ensuring an efficient discussion about your specific needs.</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="pills-step2">
                                    <div className="how-we-do-it-card bg-light mt-4 p-4 d-flex align-items-start">
                                        <div>
                                            <BsCode size={35}/>
                                            <h4 className="pt-3">Collaborate with our team.</h4>
                                            <p>During the consultation, our focus will be to gain a deeper
                                                understanding of your project. We will explore your vision, target
                                                audience, and desired outcomes to ensure alignment. Employing best
                                                practices, we will develop a robust, scalable, and user-friendly
                                                solution.</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="pills-step3">
                                    <div className="how-we-do-it-card bg-light mt-4 p-4 d-flex align-items-start">
                                        <div>
                                            <BsCode size={35}/>
                                            <h4 className="pt-3">Make technology work for you.</h4>
                                            <p>Combining our expertise and experience with your valuable input, we
                                                will craft a customized solution tailored to meet your unique
                                                business objectives. Our primary goal is to ensure that technology
                                                becomes an enabler for your business growth.</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HowWeDoIt;
