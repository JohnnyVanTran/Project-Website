import React from "react";
import '../component-styling/Contact.css'
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <section className="Contact-page">
            <h3>Contact</h3>
            <ContactForm />
        </section>
    )
}

export default Contact