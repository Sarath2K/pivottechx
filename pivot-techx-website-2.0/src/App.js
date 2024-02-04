import "./App.css";
import "../src/assets/css/style.css"
import "../src/assets/css/owl.css";
import "../src/assets/css/animated.css";
import "../src/assets/css/fontawesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/templatemo-space-dynamic.css";
import {Header} from "./Layout/Header";
import {Footer} from "./Layout/Footer";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <>
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/* <Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </Router>
            <Footer/>
        </>
    );
}

export default App;
