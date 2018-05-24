import React from 'react'

import './Card.css'

const Card = (props) => {
  return (
    <div className="card" >
      {/* <img className="card-img-top" src={props.photo} alt="Card cap" /> */}
     
      <a href="" className="card-block" style={{ backgroundImage: `url(${props.photo})`}}>
        <div className="d-flex flex-column ">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.shortDescription}</p>
        </div>
      </a> 
    </div>
  )
}
export default Card;