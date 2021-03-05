import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import logo from '../assets/logo.png';
import './NavbarCss.css'
import {
    LoginActionType,
    AuthenticationAction
} from "../actions/LoginActions";

const NavbarCom = () => {
    const [mode,setmode] = useState("online");
    const dispatch = useDispatch();
    const Logout = (e: any) => {
        e.preventDefault();
        dispatch({
            type: LoginActionType.SET_AUTH_STATUS,
            payload: {
                authStatus: false,
                authMsg: "Logout",
            },
        })
    }
    return (
        <>
            <div className="navbar-css">
                <div className="nav-grid-area-1">
                    <img src={logo} alt="logo" />
                    <h4 id="nav-text">e-Ride</h4>
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
                <div className="nav-grid-area-5">
                    <span onClick={(e) =>( Logout(e))} id = "btn" >Logout</span>
                </div>
            </div>
        </>
    )
}

export default NavbarCom;
