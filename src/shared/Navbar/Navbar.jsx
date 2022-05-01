import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/home' activeclassName='active' className='nav-item'>
        <div>HOME</div>
      </NavLink>
      <NavLink to='/projects' activeclassName='active' className='nav-item'>
        <div>PROYECTOS</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
