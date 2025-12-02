import React, { useEffect, useState } from 'react';
import './BookingSlots.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingSlots = () => {
    const [slots, setSlots] = useState([]);

    // Check and update expired slots
    const checkAndUpdateExpiredSlots = async (slotsData) => {
        const currentTime = new Date().getTime();
        const updates = slotsData.map(async (slot) => {
            if (slot.status === 'Booked' && slot.expiryTime) {
                const expiry = new Date(slot.expiryTime).getTime();
                if (currentTime > expiry) {
                    await fetch(`http://localhost:4000/data/${slot.id}`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ status: 'Expired' }),
                    });
                    toast.info(`⏰ Slot ${slot.slot} has expired.`);
                }
            }
        });
        await Promise.all(updates);
    };

    // Fetch slots and check for expired ones
    const fetchSlots = () => {
        fetch('http://localhost:4000/data')
            .then(response => response.json())
            .then(async (data) => {
                await checkAndUpdateExpiredSlots(data);
                setSlots(data);
            })
            .catch(error => {
                console.error('Error fetching slots:', error);
                toast.error('❌ Failed to fetch slots.');
            });
    };

    useEffect(() => {
        fetchSlots();
        // Optionally, you can refresh slots periodically to update expired status:
        // const interval = setInterval(fetchSlots, 60000);
        // return () => clearInterval(interval);
    }, []);

    const handleBook = async (slotNumber) => {
        const slotToUpdate = slots.find((slot) => slot.slot === slotNumber);
        if (!slotToUpdate || slotToUpdate.status === 'Booked') {
            toast.warn(`⚠️ Slot ${slotNumber} is already booked.`);
            return;
        }

        const hours = prompt("Enter how many hours you want to book this slot for:");
        const hoursInt = parseInt(hours);
        if (isNaN(hoursInt) || hoursInt <= 0) {
            toast.error("❌ Please enter a valid positive number for hours.");
            return;
        }

        // Extract numeric rate per hour from charges string like "₹50/hr" or "50" or "free"
        let ratePerHour = 0;
        if (slotToUpdate.charges) {
            const match = slotToUpdate.charges.match(/(\d+)/);
            if (match) {
                ratePerHour = parseInt(match[1]);
            }
        }

        // Calculate total charges, zero if free or no numeric rate found
        const totalCharges = ratePerHour > 0 ? ratePerHour * hoursInt : 0;

        const dateTime = new Date().toLocaleString();
        const expiryTime = new Date(new Date().getTime() + hoursInt * 60 * 60 * 1000).toISOString();

        try {
            await fetch(`http://localhost:4000/data/${slotToUpdate.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    status: 'Booked',
                    dateTime,
                    expiryTime,
                    charges: totalCharges > 0 ? `₹${totalCharges}` : slotToUpdate.charges // keep original if free
                })
            });
            fetchSlots();
            toast.success(`✅ Slot ${slotNumber} booked for ${hoursInt} hour(s)! Total: ₹${totalCharges || 'Free'}`);
        } catch (error) {
            toast.error(`❌ Failed to book Slot ${slotNumber}.`);
        }
    };

    const handleCancel = async (slotNumber) => {
        const slotToUpdate = slots.find((slot) => slot.slot === slotNumber);
        if (!slotToUpdate || slotToUpdate.status === 'Available') {
            toast.info(`ℹ️ Slot ${slotNumber} is already available.`);
            return;
        }

        try {
            await fetch(`http://localhost:4000/data/${slotToUpdate.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'Available', dateTime: '', expiryTime: '', charges: slotToUpdate.charges })
            });
            fetchSlots();
            toast.success(`✅ Booking for Slot ${slotNumber} canceled.`);
        } catch (error) {
            toast.error(`❌ Failed to cancel booking for Slot ${slotNumber}.`);
        }
    };

    return (
        <div className="book-container">
            <h2>Book Parking Slots 🚗</h2>
            <div className="slot-list">
                {slots.map((slot) => (
                    <div
                        key={slot.id}
                        className={`slot-card ${slot.status ? slot.status.toLowerCase() : 'unknown'}`}
                    >
                        <p><b>Slot:</b> {slot.slot}</p>
                        <p><b>Area:</b> {slot.area}</p>
                        <p><b>Car Type:</b> {slot.carType}</p>
                        <p><b>Charges:</b> {slot.charges}</p>
                        <p><b>Status:</b> {slot.status || 'Unknown'}</p>
                        <p><b>Booked At:</b> {slot.dateTime || 'Not booked yet'}</p>
                        <p><b>Expires At:</b> {slot.expiryTime ? new Date(slot.expiryTime).toLocaleString() : 'N/A'}</p>

                        {slot.status === 'Available' ? (
                            <button onClick={() => handleBook(slot.slot)}>Book Slot</button>
                        ) : slot.status === 'Booked' ? (
                            <button className="cancel-btn" onClick={() => handleCancel(slot.slot)}>
                                Cancel Booking
                            </button>
                        ) : (
                            <p className="expired-text">⛔ Expired</p>
                        )}
                    </div>
                ))}
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default BookingSlots;
