import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import isEmail from 'validator/es/lib/isEmail';
import './contact.css';
import emailLogo from '../../assets/email-logo.png';

const Contact = ({ closeModal }) => {
    const [user_name, setUserName] = useState(() => {
        const saved = localStorage.getItem('user_name');
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    });
    const [user_email, setUserEmail] = useState(() => {
        const saved = localStorage.getItem('user_email');
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    });
    const [message, setMessage] = useState(() => {
        const saved = localStorage.getItem('message');
        const initialValue = JSON.parse(saved);
        return initialValue || '';
    });

    useEffect(() => {
        localStorage.setItem('user_name', JSON.stringify(user_name));
    }, [user_name]);
    useEffect(() => {
        localStorage.setItem('user_email', JSON.stringify(user_email));
    }, [user_email]);
    useEffect(() => {
        localStorage.setItem('message', JSON.stringify(message));
    }, [message]);

    const form = useRef();
    const sendEmail = (event) => {
        event.preventDefault();
        
        let contactCheck = 0;
        if (user_name === '') {
            const userName = document.getElementById("contactForm_nameValid");
            userName.style.display = 'block';
            contactCheck = 1;
        } else {
            const userName = document.getElementById("contactForm_nameValid");
            userName.style.display = 'none';
        }
        if (!isEmail(user_email)) {
            const userEmail = document.getElementById("contactForm_emailValid");
            userEmail.style.display = 'block';
            contactCheck = 1;
        } else {
            const userEmail = document.getElementById("contactForm_emailValid");
            userEmail.style.display = 'none';
        }
        if (message === '') {
            const messageValid = document.getElementById("contactForm_messageValid");
            messageValid.style.display = 'block';
            contactCheck = 1;
        } else {
            const messageValid = document.getElementById("contactForm_messageValid");
            messageValid.style.display = 'none';
        }
        if (contactCheck === 1) {
            return false;
        }

        emailjs.sendForm('portfolio_contact_form', 'contact_form', form.current, '5Bhmm9hP77hOlY6-a')
        .then((result) => {
            alert('Message sent!');
            localStorage.setItem('user_name', JSON.stringify(''));
            localStorage.setItem('user_email', JSON.stringify(''));
            localStorage.setItem('message', JSON.stringify(''));
            const body = document.body;
            body.style.overflowY = '';
            closeModal(false);
          }, (error) => {
            alert(error.text);
          });
      };
    
    return (
        <div className='modal'>
            <div className='modalBackground' onClick={() => {
                const body = document.body;
                body.style.overflowY = '';
                closeModal(false);
            }}></div>
            <div className='modalContainer'>
                <div className='modalContainer-heading'>
                    <h1 className='gradient__text'>Send me a message!</h1>
                    <p>Jonathan Kim</p>
                    <p>jonathankim424@gmail.com</p>
                    <div className='modalContainer-heading-logo'>
                        <img src={emailLogo} alt='email logo' />
                    </div>
                </div>
                <div className='modalContainer-form'>
                    <form id='contactForm' ref={form} onSubmit={sendEmail}>
                        <div className='contactForm_input'>
                            <input type='text' name='user_name' value={user_name} onChange={(e) => setUserName(e.target.value)} placeholder='Your name' className='modalContainer-form-input' />
                            <p id='contactForm_nameValid'>You must provide a name</p>
                        </div>
                        <div className='contactForm_input'>
                            <input type='email' name='user_email' value={user_email} onChange={(e) => setUserEmail(e.target.value)} placeholder="What's your email?" className='modalContainer-form-input' />
                            <p id='contactForm_emailValid'>You must provide a valid email address</p>
                        </div>
                        <div className='contactForm_message'>
                            <textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='How can I help you?' className='modalContainer-form-ta' />
                            <p id='contactForm_messageValid'>Can't send an empty message!</p>
                        </div>
                        <button type='submit' className='modalContainer-form-btn'>
                            <p className='modalContainer-form-btn-p gradient__text'>Send</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact