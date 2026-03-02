import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">LetUs Help You</h1>
        <div className="contact-form-container">
            <input type="text" placeholder="yourmail@gmail.com" />
            <button className="secondary-button">Submit</button>
        </div>
    </div>
  )
}

export default Contact