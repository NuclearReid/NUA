import React from "react";
import logo from '../../src/assets/logo.png'
import FAQ from '../components/FAQ'
import { Link } from 'react-router-dom';


export default function NavBar() {
    
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
             <img src={logo} alt="Never Use Alone logo" height={100} />

            <a className="navbar-brand" href="#">Never Use Alone</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    {/* work on this tomorrow, make it so the navbar doesn't cover any of the FAQ */}
                    <li className="nav-item">
                        <a className="nav-link" href="#faq">FAQ</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">12 Step Alternatives</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Participant Rights</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mandy's Line Application</a>
                    </li>
                    <li className="nav-item">
                        <a 
                             href="https://merch.neverusealone.com/"
                            className="nav-link" 
                            target='_blank'
                            rel='noopener noreferrer'
                           >
                                Merch
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
}