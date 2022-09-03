import React, { useState } from 'react';
import './footer.css';
import { Contact } from '../../components';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='portfolio__footer section__padding' id='contact'>
      <div className='portfolio__footer-heading'>
        <h1 className='gradient__text'>Let's get in touch!</h1>
      </div>
      <div className='portfolio__footer-btn' onClick={() => {
        setOpenModal(true);
        const body = document.body;
        body.style.overflowY = 'hidden';
      }}>
        <p>Contact Me</p>
      </div>
      {openModal && <Contact closeModal={setOpenModal} />}
      <div className='portfolio__footer-links'>
        <div className='portfolio__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Address</p>
        </div>
        <div className='portfolio__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='portfolio__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='portfolio__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='portfolio__footer-copyright'>
        <p>© 2022 Jonathan Kim. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer