

import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <div id='first'>
            <h1 >Welcome to Vehicle Parking Slot Booking  !!</h1>
            <h2 id='line'>LET’S BID GOODBYE TO ALL THE PARKING PROBLEMS!</h2>
            </div>
            <div className="home-buttons">
                <Link to="/available-slots" className="btn">View Available Slots</Link>
                <Link to="/add-slot" className="btn">Book Slot</Link>
        

                {/* Dropdown Feature */}
                <div className="dropdown">
                    <button className="btn">More Options ▼</button>
                    <div className="dropdown-content">
                        <Link to="/inst">Instruction</Link>
                        <Link to="/feedback">Feedback</Link>
    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;



