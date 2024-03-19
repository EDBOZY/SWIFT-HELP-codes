import React from 'react'
import './Volunteer.css';
import a from './1.png'
import b from './2.png'

function Volunteer() {
  return (
    <div className="volunteer" style={{backgroundColor:"#F94D4D"}}>
      <div className="container">
        <div className="left">
          <h1>Your donations impacts lives</h1>
          <h3>Donating blood ? Complete your pre-reading and health history questions online before visiting your blood drive location</h3>
          <img src={a} alt="" />
        </div>
        <div className="right">
            <img src={b} alt="" />
            <h1>Because your help matters</h1>
            <p>Find the nearest blood donation center and save life</p>
            <button>Volunteer</button>
        </div>
      </div>
    </div>
  )
}

export default Volunteer