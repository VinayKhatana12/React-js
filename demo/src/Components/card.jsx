import React from 'react'
import vinayImage from '../assets/vinay.jpeg'

const card = () => {
  return (
    <>
    <div className="parent">
    <div className="card3">
        <img src={vinayImage} alt="Vinay Khatana" />
        <h1>Vinay  Khatana</h1>
        <p>React Js Developer</p>
        <p>Hi this side vinay building scalable and user focused web applications</p>
        <button>Hire Me</button>
    </div>
    <div className="card3">
        <img src={vinayImage} alt="Vinay Khatana" />
        <h1>Vinay  Khatana</h1>
        <p>React Js Developer</p>
        <p>Hi this side vinay building scalable and user focused web applications</p>
        <button>Hire Me</button>
    </div>
    </div>
    </>
  )
}

export default card