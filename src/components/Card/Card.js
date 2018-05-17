import React from 'react'
import data from './../../static/portfolio.json'
import photo1 from './../../static/covers/1.png'
import './Card.css'

const Card = (props) => {
  var photos = [];
  for (var i = 0; i < 3; i++) {
    photos.push(
    
    );
  } 
  return (
    <div className="card" >
      <img className="card-img-top" src={photo1} alt="Card cap" />
      <div className="d-flex flex-column card-block">
        <h4 className="card-title">{data[props.var].title}</h4>
        <p className="card-text">{data[props.var].shortDescription}</p>
        <a className="btn">Подробнее</a>
      </div>
    
    </div>
  )
}
export default Card;