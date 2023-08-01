import React from 'react';
import "./about.css";
import Profile from '../../assets/me.png'
import Aboutbox from './Aboutbox';
import Curriculum from '../../assets/Lucas-Gabriel-Nascimento-dos-Santos-CV-Resume.pdf';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Profile} alt="" className='about__img'/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I'm Lucas Gabriel, web developer from Sergipe, Brazil. I have rich experience in web site design and building and customization, also I am good at CSS(PURE).</p>
            <a href={Curriculum} className="btn" download>Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className='skills__percentage development'></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">75%</span>
              </div>

              <div className="skills__bar">
                <span className='skills__percentage ui__design'></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Soft skills</h3>
                <span className="skills__number">95%</span>
              </div>

              <div className="skills__bar">
                <span className='skills__percentage soft__skills'></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Language skills</h3>
                <span className="skills__number">85%</span>
              </div>

              <div className="skills__bar">
                <span className='skills__percentage language__skills'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Aboutbox />
    </section>
  )
}

export default About