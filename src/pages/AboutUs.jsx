import React from 'react';
import './AboutUs.css';



const AboutUs = () => {
    return (
        <>
        <div className="about-us-container" >
            <div className="about-box">
            <h1>About Us</h1>
            <p>Welcome to our Vehicle Parking Slot Booking website! Our platform is designed to make parking slot booking simple, fast, and efficient. Whether you're a daily commuter or an occasional traveler, our service ensures that you can easily find and book parking slots that suit your needs.</p>
            <h2>Our Mission</h2>
            <p>Our mission is to provide a hassle-free parking solution that saves your time and ensures your vehicle's safety. By offering a user-friendly interface, real-time updates, and secure transactions, we aim to make parking stress-free for everyone.</p>
            <h2>Features of Our Platform</h2>
            <ul>
                <li>Search for parking slots by area and car type.</li>
                <li>View detailed information about each slot including charges and car compatibility.</li>
                <li>Book and cancel slots conveniently.</li>
                <li>Admin feature for adding and managing parking slots.</li>
            </ul>
            <h2>Contact Us</h2>
            <p>If you have any questions or concerns, feel free to reach out to us via our <strong>Contact Us</strong> page. We're here to help you!</p>
        </div>
        </div>
        </>
    );
}

export default AboutUs;
