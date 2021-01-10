import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import {Card} from '../../../components'
import './Main.css'

import logo1 from './../../../static/covers/1.png'
import logo2 from './../../../static/covers/2.png'
import logo3 from './../../../static/covers/3.png'

 class Main extends Component {
  render() {
    return (
      <div className="Main">
        <main>
          <div className="container d-flex justify-content-around flex-wrap">
            <Card 
              photo={logo1} 
              title="Turanter"
              shortDescription="Tурецкая туристическая компания"
            />
              
            <Card 
              photo={logo2}
              title="Lightning Design"
              shortDescription="Компания по веб-разработке и дизайна"
            />
            <Card 
              photo={logo3} 
              title="Mezunion"
              shortDescription="Студенческая благотворительная организация"
            />            
          </div>
          <div className="container d-flex justify-content-around flex-wrap">
            <NavLink className="btn view-all" to="/portfolio">Все работы</NavLink>  
          </div>
          
        </main>
      </div>
    )
  }
}
export default Main;