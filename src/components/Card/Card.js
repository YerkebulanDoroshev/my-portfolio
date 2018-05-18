import React from 'react'

import './Card.css'

const Card = (props) => {
  return (
    <div className="card" >
      <img className="card-img-top" src={props.photo} alt="Card cap" />
      <div className="d-flex flex-column card-block">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.shortDescription}</p>
        <a className="btn">Подробнее</a>
      </div>
    
    </div>
  )
}
export default Card;