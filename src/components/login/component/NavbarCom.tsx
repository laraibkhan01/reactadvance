import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
import './NavbarCss.css'
const NavbarCom = () => {
    return (
        <>
            <div className="navbar-css">
                <div className="nav-grid-area-1">
                    <img src={logo} alt="logo" />
                    <h4 id = "nav-text">e-Ride</h4>
                </div>
                <div className="nav-grid-area-2">
                    <Link className="VmBtn1" to="/">ElectricCars</Link>
                </div>
                <div className="nav-grid-area-3">
                    <Link className="VmBtn1" to="/suitabilitytool">Suitibility Tool</Link>
                </div>
                <div className="nav-grid-area-4">
                    <Link className="VmBtn1" to="/mybooking">Mybooking</Link>
                </div>
            </div>
        </>
    )
}

export default NavbarCom;
