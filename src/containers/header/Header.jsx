import React from 'react';
import './header.css';
import profile from '../../assets/profile.png';

const Header = () => {
  return (
    <div className='portfolio__header section__padding' id='home'>
      <div className='portfolio__header-content'>
        <div className='portfolio__header-content__title'>
          Hi there! I'm
          <h1 className='gradient__text'>Jonathan Kim</h1>
          <div className='portfolio__header-content__title-sub'>
            a <span className='gradient__text'>Full Stack Developer</span>
          </div>
        </div>
        <h2>Simplicity is the ultimate sophistication</h2>
        <h4>-Leonardo da Vinci</h4>
        <p>Full stack web developer coming from a mechanical engineering background focused on the automotive industry. Passionate about programming innovative solutions and developing unique apps that progress new technologies in a continually evolving industry. Excited to use my skills and leverage my background with an agile team to build impactful websites and apps.</p>
        <div className='portfolio__header-content__input'>
          <a href='upload/jonathan_kim_fullStackDev_resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</a>
        </div>
      </div>
      <div className='portfolio__header-image'>
        <img src={profile} alt='profile' />
      </div>
    </div>
  )
}

export default Header