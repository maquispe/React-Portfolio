import React from 'react'
import './style.css'

const Card = () => {
  return (
    <div className="card" style={{"width": "18rem"}}>
      <img src="https://placehold.it/150x150" className="card-img-top" alt="placeholder" />
      <div className="card-body">
        <p className="card-text">Full-Stack Web Developer</p>
        <p className="card-text">UC Berkeley Extension</p>
        <a href="https://www.linkedin.com/in/manuel-quispe-5979a89a/" className="card-link">LinkedIn Profile</a>
        <br />
        <a href="https://github.com/maquispe" className="card-link">Github Profile</a>
      </div>
      
      <div className="card-body">
      </div>
    </div>
  )
};

export default Card
