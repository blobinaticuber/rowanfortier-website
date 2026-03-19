import './header.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

export function Header() {
    return (
        <div className="topnav">
            <div className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                {/* <a className="active" href="index.html">Home</a> */}
                {/* <a href="programming.html">Projects</a> */}
            </div>
        </div>
    )
}
