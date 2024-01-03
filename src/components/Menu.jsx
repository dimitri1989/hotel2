import React, { useEffect, useState } from 'react';
import { NavLink , useLocation } from 'react-router-dom';

const Menu = () => {
  var [positionNav,setPositionNav] = useState("navbar navbar-expand-md positiondiv")
  /* <nav><NavLink to=".">home</NavLink>
        <NavLink to="about">about</NavLink>
        <h4>Hotel</h4>
        <NavLink to="prices">price</NavLink>
        <NavLink to="rooms">Rooms</NavLink></nav>*/
        var p = useLocation()
       useEffect(()=>{
        
        if(p.pathname !== "/"){
          setPositionNav("navbar navbar-expand-md positiondiv2")
        }else{
          setPositionNav("navbar navbar-expand-md positiondiv")
        }
       })
  return (
    <>
      <nav className={positionNav}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <NavLink className="nav-link" to="." end>
            Home
          </NavLink>
          <NavLink className="nav-link" to="about">about</NavLink>
          <h4 className="nav-link">Hotel Logo</h4>
          <NavLink className="nav-link" to="Oferrs">Oferrs</NavLink>
          <NavLink className="nav-link" to="rooms">rooms</NavLink>
          <NavLink className="nav-link" to="contact">contact</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Menu;
