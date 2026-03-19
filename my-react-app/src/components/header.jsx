import './header.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export function Header() {
    return (
        <div className="topnav">
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                {/* <a className="active" href="index.html">Home</a> */}
                {/* <a href="programming.html">Projects</a> */}
            </div>
        </div>
    )
}
