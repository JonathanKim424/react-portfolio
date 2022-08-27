import React from 'react';
import './skills.css';
import frontEndLogo from '../../assets/front_end-logos_transparent1.png';

const Skills = () => {
    return (
        <div className='portfolio__skills section__padding' id='skills'>
            <div className='portfolio__skills-heading'>
                <h1 className='gradient__text'>Full Stack Developer with a full stack of skills</h1>
            </div>
            <div className='portfolio__skills-content'>
                <div className='portfolio__skills-content_div'>
                    <div className='portfolio__skills-content_div-logo'>
                        <img src={frontEndLogo} alt='front end logo' />
                    </div>
                    <div className='portfolio__skills-content_div-list'>
                        <p>HTML5</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                    <div className='portfolio__skills-content_div-list'>
                        <p>React</p>
                        <p>Bootstrap</p>
                        <p>Tailwind</p>
                    </div>
                </div>
                <div className='portfolio__skills-content_div'>
                    <h4>Back End</h4>
                    <p>JavaScript</p>
                    <p>Node.js</p>
                    <p>Express</p>
                    <p>REST API</p>
                    <p>GraphQL</p>
                </div>
            </div>
            <div className='portfolio__skills-content'>
                <div className='portfolio__skills-content_div'>
                    <h4>Databases</h4>
                    <p>MySQL</p>
                    <p>Sequelize</p>
                    <p>MongoDB</p>
                    <p>Mongoose</p>
                </div>
                <div className='portfolio__skills-content_div'>
                    <h4>Other Skills</h4>
                    <p>Git Version Control</p>
                    <p>Heroku App Deployment</p>
                </div>
            </div>
        </div>
    )
}

export default Skills