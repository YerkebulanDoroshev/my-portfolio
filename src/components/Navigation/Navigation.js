import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../static/logo.png'

import './Navigation.css'

const Navigation = () => {
  return (
    <div className="Navigation">
      <nav class="navbar navbar-expand-lg">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link logo">
              <NavLink className="nav-link" to="/"><img src={logo} alt="Home"/></NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Navigation;
