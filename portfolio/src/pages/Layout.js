import { Outlet, Link } from "react-router-dom";
import  "../style.scss"
import logo from "../images/Logo.png"
//import { useState } from 'react'

const Layout = () => {
 /* const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }*/
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
        {/*<div className='hamburger isActive ? active : ""'  onClick={toggleActiveClass}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>*/}
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;