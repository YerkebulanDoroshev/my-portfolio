import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <div className={classes.logo}>
        <NavLink
          className={classes.navLink}
          activeClassName={classes.activeLink}
          exact
          to="/"
        >
          Yerkeboolean
        </NavLink>
      </div>

      <div className={classes.links}>
        <NavLink
          className={classes.navLink}
          activeClassName={classes.activeLink}
          to="/portfolio"
        >
          Portfolio
        </NavLink>

        <NavLink
          className={classes.navLink}
          activeClassName={classes.activeLink}
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          className={classes.navLink}
          activeClassName={classes.activeLink}
          to="/contacts"
        >
          Contacts
        </NavLink>
        <NavLink
          className={classes.navLink}
          activeClassName={classes.activeLink}
          to="/resume"
        >
          Resume
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
