import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/portfilo">Portfoli</NavLink>      
      <NavLink to="/contacts">Contacts</NavLink>
    </div>
  )
}

export default Navigation;
