import React from 'react';
import logoImg from '../images/logo.svg';
import '../styles/pages/landing.css';
import { FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

function Landing(){
    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"></img>
          
          <main>
            <h1>Bring happy to the world </h1>
            <p>Visit orphanages and change the day of many children.</p>
          </main>
  
          <div className="location">
            <strong> São Paulo</strong>
            <span>São Paulo</span>
          </div>
  
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </Link>      
        </div>
      </div>
    );
}

export default Landing;

