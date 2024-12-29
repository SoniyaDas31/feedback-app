import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
   
    const navigate = useNavigate();
   

    
   

    


    return (
       
                
                    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light m-0">
                        <NavLink to="/dashboard" className="navbar-brand">Feedback Portal</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 me-4">
                                <li className="nav-item active">
                                    <NavLink to="/" className="nav-link">Home </NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">Dashboard</a>
                                </li>

                            </ul>
                            


                        </div>
                    </nav>
               
           
    );
};


export default Navbar;