import React from 'react'
import './Contact.css'
import a from './6 73015.png'

function Contact() {
  return (
    <div className="contact">
        <div className="left">
            <img src={a} alt="" />
        </div>
        <div className="right">
            <div className="head">
                <h1 style={{fontSize:"50px"}}>CONTACT US</h1>
            </div>
            <div className="email">
                <label >EMAIL:</label>
                <div className="input">
                    <input type="email" placeholder='Enter your mail id' />
                </div>
            </div>
            <div className="email">
                <label >Concern:</label>
                <div className="input">
                    <textarea className='' type="textarea" placeholder='Enter your concern' />
                </div>
            </div>
            <div className="button">
                <button>SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default Contact