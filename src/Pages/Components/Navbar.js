import React, { useState } from "react";
import "../../styles.scss";
import { Link } from "react-router-dom";
import logo from "./Group 2.svg";
import Rectangle from "./Rectangle.svg";
const Navbar = ({active}) => {

  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  }

  return (
    <div className="navbar">

        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="line">
          <img src={Rectangle} alt="" />
        </div>

        <div className="open">
          <input type="checkbox" id="open" />

          <label onClick={handleToggle} htmlFor="open" className="hamburger-menu">
            <span className="bars">
              <span className="bars__icon-bar top"></span>
              <span className="bars__icon-bar middle"></span>
              <span className="bars__icon-bar bottom"></span>
            </span>
          </label>
        </div>

        <nav className={showNav ? "nav" : "nav hide"}>
            <div className={active === 'home' ? "active link" : 'link'}>
              <Link to="/">
                <span className="number">00</span>
                <span className="link-name">HOME</span>
              </Link>
            </div>

            <div className={active === 'destination' ? "active link" : 'link'}>
              <Link to="/destination">
                <span className="number">01</span>
                <span className="link-name">DESTINATION</span>
              </Link>
            </div>

            <div className={active === 'crew' ? "active link" : 'link'}>
              <Link to="/crew">
                <span className="number">02</span>
                <span className="link-name">CREW</span>
              </Link>
            </div>

            <div className={active === 'technology' ? "active link" : 'link'}>
              <Link to="/technology">
                <span className="number">03</span>
                <span className="link-name">TECHNOLOGY</span>
              </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
