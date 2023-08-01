import React from 'react';
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>

          <form action="https://formsubmit.co/fa44464bb78502e33968498fc13c4445" className="contact__form" method='POST'>
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input type="text" className="contact__form-input" id='name' name='name' required/>
                <label htmlFor="name">Insert your name</label>
              </div>

              <div className="contact__form-div">
                <input type="email" className="contact__form-input" name="email" id='email' required/>
                <label htmlFor="email">Insert your email</label>
              </div>

              <div className="contact__form-div">
                <input type="text" className="contact__form-input" id='subject' name='_subject' required/>
                <label htmlFor='subject'>Insert your subject</label>
              </div>

              <div className="contact__form-div contact__form-area">
                <textarea cols="30" rows="10" className='contact__form-input' id='message' name='message' required></textarea>
                <label htmlFor="message">Write your message</label>
              </div>

              <input type="hidden" name="_next" value="https://lucasgabe.com" />

              <input type="hidden" name="_captcha" value="false" />

              <input type="hidden" name="_template" value="table" />

              <button className='btn'>Send me a message!</button>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact