import {useState} from "react";
import axios from "axios";
import HeroContacts from "./elements/HeroContacts";
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';

function Contact() {

    const form = useRef();
    const [sending, setSending] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_KEY_ID)
            .then((result) => {
                console.log(result.text);
                toast.success('Form submitted successfully!');
            }, (error) => {
                console.log(error.text);
                toast.error('Error submitting form.');
            });
    };

    return (
        <div id="contact-form">
            <h1 className="heading">Contact</h1>
            <p className="paragraph">
                I&apos;m open to opportunities, if you would like to connect kindly fill up the form below. However, if you
                just want to say hi or have a question, feel free to reach out too. Thanks!
            </p>
            <form ref={form} onSubmit={sendEmail} >
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="from_name" name="from_name" placeholder="John Doe" required/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="to_name" name="to_name" placeholder="name@example.com" required/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                </div>
                <div className="d-flex justify-content-center my-4">
                    <button type="submit" className="btn btn-primary">{sending? "Sending..." : "Send Message"}</button>
                </div>
            </form>
            <HeroContacts />
        </div>
    )
}

export default Contact