import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstPage.css';

const FirstPage = () => {
    const navigate = useNavigate();

    return (
        <div className="firstpage-container">
            <div className="firstpage-box">
                <h1 id='title'>Welcome to Parking Slot Booking 🚗</h1>
                <p>Select an option to continue:</p>
                <div className="button-group">
                    <button className="btn login-btn" onClick={() => navigate('/login')}>Login</button>
                    <button className="btn register-btn" onClick={() => navigate('/register')}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
