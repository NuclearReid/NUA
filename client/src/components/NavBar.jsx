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
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    {/* work on this tomorrow, make it so the navbar doesn't cover any of the FAQ */}
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#faq">FAQ</a>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Contact Us
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to="/particpantGrievanceForm">
                                    Participant Grievance Form
                                </Link>
                                
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">12 Step Alternatives</a>
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