import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Nav() {
    return (
      <nav>
        <div className="wrap-out">
            <div className="wrap-in">
                <div className="content-skip" tabIndex="0">Skip to main content</div>
                <div className="container">
                    <div className="logo">
                        <Link to="./"><img src={logo} alt="logo"/></Link>
                    </div>
                    <div className="hamburger" tabIndex="0"><img src="./hamburger.svg"
                        alt="hamburger icon"/></div>
                    <ul className="hidden"><li>
                        <Link to='./projects'>PROJECTS</Link></li><li>
                        <Link to="./snippets">SNIPPETS</Link></li><li>
                        <Link to="./skills">SKILLS</Link></li><li>
                        <Link to="./courses">COURSES</Link></li><li>
                        <Link to="./certificates">CERTIFICATES</Link></li><li>
                        <Link to="./readings">READINGS</Link></li>
                    </ul>
                </div>
            </div>
        </div>
      </nav>
    )
}

export default Nav;