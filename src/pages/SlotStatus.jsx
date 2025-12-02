
//perfect works
import React, { useEffect, useState } from 'react';
import './SlotStatus.css';

const SlotStatus = () => {
    const [slots, setSlots] = useState([]);

    // Fetch slots from json-server
    useEffect(() => {
        fetch('http://localhost:4000/data')
            .then(response => response.json())
            .then(data => setSlots(data))
            .catch(error => console.error('Error fetching slots:', error));
    }, []);

    return (
        <div className="container">
            <h1 className="head">Parking Slot Status 🅿️</h1>
            <div className="slot-lists">
                {slots.map((slot) => (
                    <div 
                        key={slot.id} 
                        className={`slot-cards ${slot.status ? slot.status.toLowerCase() : 'unknown'}`}
                    >
                        <p><b>Slot:</b> {slot.slot}</p>
                        <p><b>Area:</b> {slot.area}</p>
                        <p><b>Charges:</b> ₹{slot.charges}</p>
                        <p><b>Car Type:</b> {slot.carType}</p>
                        <p><b>Status:</b> {slot.status || 'Unknown'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlotStatus;






