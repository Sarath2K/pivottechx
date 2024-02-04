import {BsClipboard, BsCodeSlash, BsFeather, BsGearWideConnected, BsPhone, BsShop} from "react-icons/bs";
import React from "react";

export const APP_TITLE = "Pivot TechX";
export const SHORT_APP_TITLE = "PTS";
export const PTS_EMAIL = "pivottechx@gmail.com";
export const PTS_PHONE = 8220855749;

export const servicesOffered = [
    {
        title: "Web Development",
        description:
            'Many businesses struggle to transform their ideas into impactful digital solutions. They face challenges in building web applications that are efficient, secure, and engaging.',
        icon: <BsCodeSlash size={35}/>,
    },
    {
        title: "Mobile App Development",
        description:
            "Businesses face challenges in adapting and reaching their audience effectively. Creating engaging mobile applications that provide seamless experiences can be tough.",
        icon: <BsPhone size={35}/>,
    },
    {
        title: "E-Commerce",
        description:
            "E-Commerce is the trending wave for many businesses to take a giant leap for selling products seamlessly.",
        icon: <BsShop size={35}/>,
    },
    {
        title: "DevOps",
        description:
            "Building faster, trendier, and secured applications and providing the best software solutions in the core concept underneath the ideas of our DevOps team.",
        icon: <BsGearWideConnected size={35}/>,
    },
    {
        title: "End-to-End Solutions",
        description:
            "By keeping this as the bottom line, we perform all the processes that take to deliver a method or service from its beginning to its end, deriving a complete functional solution.",
        icon: <BsClipboard size={35}/>,
    },
    {
        title: "Consultation",
        description:
            "We not only limit ourselves to being implementation-focused only but also understand what type of business problems our clients have and provide them with the best software consultation service as a solution.",
        icon: <BsFeather size={35}/>,
    },
];