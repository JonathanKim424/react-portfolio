import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = ({ closeModal }) => {
    const form = useRef();
    const sendEmail = (event) => {
        event.preventDefault();
        const body = document.body;
        body.style.overflowY = '';
        closeModal(false);
        // emailjs.sendForm('portfolio_contact_form', 'contact_form', form.current, '5Bhmm9hP77hOlY6-a')
        //   .then((result) => {
        //     console.log(result.text);
        //     closeModal(false);
        //     // document.getElementById('contactForm').reset();
        //   }, (error) => {
        //     console.log(error.text);
        //   });
      };
    
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <form id='contactForm' ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type='text' name='user_name' />
                    <label>Email</label>
                    <input type='email' name='user_email' />
                    <label>Message</label>
                    <textarea name='message' />
                    <input type='submit' value='Send' />
                </form>
            </div>
        </div>
    )
}

export default Contact