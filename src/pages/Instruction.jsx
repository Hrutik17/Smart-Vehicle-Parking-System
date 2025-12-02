import React from 'react';
import './Instruction.css';

const Instruction = () => {
    return (
        
        <div className="instruction-container">
            <div className='inst-container'>
            <h1>✏️Instructions for Booking a Parking Slot</h1>
            <ul>
                <li>Navigate to the 'Available Slots' page to view free parking slots.</li>
                <li>Click on 'Book Slot' to reserve a parking space.</li>
                <li>To cancel a booking, go to the 'Booked Slots' page and click 'Cancel'.</li>
                <li>Use the 'Search' page to find available slots by area or car type.</li>
                <li>Check the parking charges before confirming your booking.</li>
                <li>Once booked, make sure to note your booking reference number for future reference.</li>
                <li>For further assistance, visit the 'Contact Us' page.</li>
            </ul>
        </div>
        </div>
    );
};

export default Instruction;
