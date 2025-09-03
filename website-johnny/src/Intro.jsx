
import React from "react";
import "./Intro.css";
import download from "./images/download.jpg";

function Intro() {
    return (
        <section className='site-intro'>
            <h2>I am Johnny</h2>
            <img src={download} alt="Jabba the hut"></img>
        </section>
    )
}

export default Intro