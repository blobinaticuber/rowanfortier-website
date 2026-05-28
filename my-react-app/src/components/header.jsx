import './header.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import { FaCubesStacked } from "react-icons/fa6";
import { PiSquaresFourFill } from "react-icons/pi";

export function Header() {
    return (
        <div className="topnav">
            <div className="nav">
                <NavLink to="/"><BsFillPersonFill /><p className="linkText">About</p></NavLink>
                <NavLink to="/projects"><PiSquaresFourFill /><p className="linkText">Projects</p></NavLink>
                <NavLink to="/hobbies"><FaCubesStacked /><p className="linkText">Hobbies</p></NavLink>
            </div>
        </div>
    )
}
