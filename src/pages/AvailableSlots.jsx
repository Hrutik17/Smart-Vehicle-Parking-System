

// // AvailableSlots.jsx
import React, { useEffect, useState } from 'react';
import "./AvailableSlots.css"
const AvailableSlots = () => {
  const [availableSlots,setAvailableSlots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/data')
      .then((response) => response.json())  
      .then((data) => setAvailableSlots(data.filter(slot => slot.status === 'Available')));
  
  }, []);
  


  return (
    <div className="page-container">
      <h2>🟡Available Parking Slots 🟡</h2>
      {availableSlots.length > 0 ? (
        <ul>
          {availableSlots.map((slot) => (
            <li key={slot.id}>
             <b>Slot:</b> {slot.slot} | <b>Area:</b> {slot.area} | <b>Car Type:</b> {slot.carType} | <b>Charges:</b> {slot.charges}
            </li>
          ))}
        </ul>
      ) : (
        <p>No available slots at the moment.</p>
      )}
    </div>
  );
};

export default AvailableSlots;

//---------------------------
