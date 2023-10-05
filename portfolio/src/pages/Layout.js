import { Outlet, Link } from "react-router-dom";
import  "../style.css"
import logo from "../images/Logo.png"

const Layout = () => {
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
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;