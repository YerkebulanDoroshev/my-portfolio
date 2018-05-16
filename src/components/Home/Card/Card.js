import React from 'react'
import logo from './../../../static/index.png'
import data from './../../../static/portfolio.json'

const Card = (props) => {
  return (
    <div className="card" >
      <img className="card-img-top" src={logo} alt="Card cap" />
      <div className="card-block">
        <h4 className="card-title">{data[props.var].title}</h4>
        <p className="card-text">{data[props.var].description}</p>
        <a className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
export default Card;