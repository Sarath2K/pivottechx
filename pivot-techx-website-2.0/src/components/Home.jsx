import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import Technology from "./Technology";
import HowWeHelpYou from "./HowWeHelpYou";
import HowWeDoIt from "./HowWeDoIt";
import {BsCodeSlash, BsRocketFill} from 'react-icons/bs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Technology/>
            <HowWeHelpYou/>
            <HowWeDoIt/>
        </div>
    );
};
export default Home;
