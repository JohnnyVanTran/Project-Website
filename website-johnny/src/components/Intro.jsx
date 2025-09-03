
import React from "react";
import "../component-styling/Intro.css";
import portrait from "../images/portrait.jpg";

function Intro() {
    return (
        <section className='site-intro'>
            <h2>I am Johnny</h2>
            <img src={portrait} className="img-portrait"></img>
        </section>
    )
}

export default Intro