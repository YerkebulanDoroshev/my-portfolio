import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link">
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              exact
              to="/"
            >
              Yerkeboolean
            </NavLink>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/about"
            >
              About
            </NavLink>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/contacts"
            >
              Contacts
            </NavLink>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <NavLink className="nav-link" to="/resume">
              Resume
            </NavLink>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
