import { Outlet, Link } from "react-router-dom";
import  "../style.scss"
import logo from "../images/Logo.png"
//import { useState } from 'react'

const Layout = () => {


  //add the active class
  const toggleActiveClass = () => {
    const z=document.querySelector(".hamburger");
    const y=document.querySelector("nav ul");
    z.classList.toggle("active");
    y.classList.toggle("active");
  };



  return (
    <>
      <nav>
        <img src={logo} alt="LOGO"/>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>

          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
        </ul>
        <div className="hamburger"  onClick={toggleActiveClass}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;