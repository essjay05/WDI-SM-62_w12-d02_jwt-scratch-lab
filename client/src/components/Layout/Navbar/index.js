import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default () => {
    return (
        <nav className="nav clearfix">
            <div className="float-left">
                <Link className="nav-link" to="/">Home</Link>
            </div>
            <div className="float-right">
                <span>
                    <Link className="nav-link" to="/profile">Profile</Link>
                    <Link className="nav-link" to="/logout">Logout</Link>
                </span>
                <span>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/signup">Signup</Link>
                </span>
            </div>
        </nav>
    )

};