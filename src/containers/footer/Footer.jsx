import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaGithubSquare, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import './footer.css';
import { Contact } from '../../components';

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
        <div className='portfolio__footer-links_div'>
          <div className='portfolio__footer-links_div-logo'>
            <a href='https://github.com/JonathanKim424' target='__blank'>
              <IconContext.Provider value={{ className: 'portfolio__footer-links_div-logo' }}>
                <FaGithubSquare />
              </IconContext.Provider>
              <h4>GitHub</h4>
            </a>
          </div>
        </div>
        <div className='portfolio__footer-links_div'>
          <div className='portfolio__footer-links_div-logo'>
              <a href='https://www.linkedin.com/in/jonathan-kim-135a7070/' target='__blank'>
                <IconContext.Provider value={{ className: 'portfolio__footer-links_div-logo' }}>
                  <FaLinkedin />
                </IconContext.Provider>
                <h4>LinkedIn</h4>
              </a>
          </div>
        </div>
        <div className='portfolio__footer-links_div'>
        <div className='portfolio__footer-links_div-logo'>
              <a href='https://stackoverflow.com/users/17963540/vizard424' target='__blank'>
                <IconContext.Provider value={{ className: 'portfolio__footer-links_div-logo' }}>
                  <FaStackOverflow />
                </IconContext.Provider>
                <h4>Stack Overflow</h4>
              </a>
          </div>
        </div>
      </div>
      <div className='portfolio__footer-copyright'>
        <p>© 2022 Jonathan Kim. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer