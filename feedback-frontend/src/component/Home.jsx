import React from 'react';
import Navbar from './Navbar';
import '../App.css';
import { Link, Navigate } from 'react-router-dom';



const Home = () => {
  return (
    <>
    
      <Navbar />

      <div className="App">
        <header className="hero">
          <h1 className="hero-title">Welcome to feedback Portal</h1>
          <p className="hero-subtitle">feedback Portal is an innovative platform </p>
          <button className="hero-button">
            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>open</Link>
          </button>
        </header>

        
      



      </div>
      
    </>
  );
};

export default Home;
