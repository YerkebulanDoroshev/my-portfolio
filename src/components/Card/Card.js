import React from 'react'

import './Card.css'

const Card = (props) => {
  return (
    <a href="" className="card" >
      <div className="card-block" style={{ backgroundImage: `url(${props.photo})` }}>
        
      </div>
      <div className="card-title">
        <h4 >{props.title}</h4>
        <p>{props.shortDescription}</p>
      </div>
       
    </a>

  )
}
export default Card;