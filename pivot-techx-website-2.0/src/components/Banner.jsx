import React from "react";
import Logo from "../assets/images/banner.jpg";
import {Col, Row} from "react-bootstrap";

const Banner = () => {
    return (
        <div
            className="main-banner wow fadeIn"
            id="top"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
        >
            <div className="container">
                <Row>
                    <Col md={6}>
                        <div className="align-self-center p-3">
                            <div
                                className="left-content header-text wow fadeInLeft"
                                data-wow-duration="1s"
                                data-wow-delay="1s"
                            >
                                <h6>Be Alive With Tech Satisfaction</h6>
                                <h2>
                                    Maximize your business potential with the{" "}
                                    State-of-art <span>Web</span> &amp;{" "}
                                    <span>Mobile Apps</span> from us.
                                </h2>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <div className="right-image wow fadeInRight">
                                <img src={Logo} alt="team meeting"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default Banner;
