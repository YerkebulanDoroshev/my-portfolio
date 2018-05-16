import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigation = () => {
  return (
    <div className="Navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
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
