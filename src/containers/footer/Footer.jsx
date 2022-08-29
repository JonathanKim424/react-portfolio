import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './footer.css';
import { Contact } from '../../components';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {

  const [openModal, setOpenModal] = useState(false);

  // const form = useRef();
  // const sendEmail = (event) => {
  //   event.preventDefault();
  //   emailjs.sendForm('portfolio_contact_form', 'contact_form', form.current, '5Bhmm9hP77hOlY6-a')
  //     .then((result) => {
  //       console.log(result.text);
  //       document.getElementById('contactForm').reset();
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };

  return (
    <div className='gpt3__footer section__padding' id='contact'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn' onClick={() => {
        setOpenModal(true);
        const body = document.body;
        body.style.overflowY = 'hidden';
      }}>
        <p>Request Early Access</p>
      </div>
      {openModal && <Contact closeModal={setOpenModal} />}
      {/* <form id='contactForm' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name' />
        <label>Email</label>
        <input type='email' name='user_email' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
      </form> */}
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Address</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer