import './header.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { ImHome3 } from "react-icons/im";
import { MdOutlineWeb } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";

export function Header() {
    return (
        <div className="topnav">
            <div className="nav">
                <NavLink to="/"><ImHome3/><p className="linkText">Home</p></NavLink>
                <NavLink to="/projects"><PiSquaresFourFill /><p className="linkText">Projects</p></NavLink>
                <NavLink to="/services"><MdOutlineWeb/><p className="linkText">Services</p></NavLink>
            </div>
        </div>
    )
}
