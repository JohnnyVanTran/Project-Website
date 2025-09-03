
import React from "react";
import '../component-styling/About.css';
import styrebilde from '../images/styrebilde.jpeg';

function About() {
    return (
        <section className="About-me">
            <h3 className="About-section">About Me</h3>
            <div className="Description-about-me">
                My name is Johnny Tran and I have completed my bachelor in Informatics focusing on programming and system development
                 at University of Oslo. I have recently started my masters degree in Informatics: Programming and System Architecture 
                and on the look out to gain work experience to further develop my skills.
            </div>
            <div className="Schoollife">
                <div>
                    In addition to my coursework, I'm passionate about student activities. 
                    I'm on the school's football team and was an active member of the 
                    student union for Informatics: Design, Use and Interaction. For the past few years, 
                    I've also enjoyed helping to welcome new students to campus, making sure they feel 
                    comfortable during their first week and helping them connect with their peers. 
                    This has allowed me to form many great connections myself.
                </div>
                <img src={styrebilde} className="Styrebilde"></img>
            </div>
        </section>
    )
}

export default About