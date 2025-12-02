
// import React, { useState, useEffect } from 'react';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//     const [slots, setSlots] = useState([]);
//     const [newSlot, setNewSlot] = useState({ slot: '', area: '', carType: '', charges: '', status: '' });

//     useEffect(() => {
//         fetch('http://localhost:4000/data')
//             .then(response => response.json())
//             .then(data => setSlots(data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     const handleAddSlot = () => {
//         const isDuplicate = slots.some(slot => slot.slot === newSlot.slot && slot.area === newSlot.area);
//         if (isDuplicate) {
//             alert('This slot is already present!');
//             return;
//         }

//         const updatedSlots = [...slots, newSlot];
//         setSlots(updatedSlots);

//         fetch('http://localhost:4000/data', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(newSlot),
//         })
//             .then(response => response.json())
//             .then(() => alert('Slot added successfully!'))
//             .catch(error => console.error('Error adding slot:', error));

//         setNewSlot({ slot: '', area: '', carType: '', charges: '', status: '' });
//     };

//     const handleRemoveSlot = (slotToRemove) => {
//         fetch(`http://localhost:4000/data/${slotToRemove.id}`, {
//             method: 'DELETE',
//         })
//             .then(() => {
//                 const updatedSlots = slots.filter(slot => slot.id !== slotToRemove.id);
//                 setSlots(updatedSlots);
//                 alert('Slot removed successfully!');
//             })
//             .catch(error => console.error('Error removing slot:', error));
//     };

//     return (
//         <div className="admin-container">
//             <h1 id="admin">Admin Panel - Manage Parking Slots</h1>
//             <div className="add-slot-form">
//                 <input
//                     type="text"
//                     placeholder="Slot Id"
//                     value={newSlot.slot}
//                     onChange={(e) => setNewSlot({ ...newSlot, slot: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Area"
//                     value={newSlot.area}
//                     onChange={(e) => setNewSlot({ ...newSlot, area: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Car Type"
//                     value={newSlot.carType}
//                     onChange={(e) => setNewSlot({ ...newSlot, carType: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Charges"
//                     value={newSlot.charges}
//                     onChange={(e) => setNewSlot({ ...newSlot, charges: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Status"
//                     value={newSlot.status}
//                     onChange={(e) => setNewSlot({ ...newSlot, status: e.target.value })}
//                 />
//                 <button onClick={handleAddSlot}>Add Slot</button>
//             </div>

//             <div className="slot-list">
//                 {/* <h2>Available Slots</h2> */}
//                 {slots.map((slot, index) => (
//                     <div key={index} className="slot-item" data-aos="flip-right" data-aos-duration="1000">
//                         <p>Slot: {slot.slot}</p>
//                         <p>Area: {slot.area}</p>
//                         <p>Car Type: {slot.carType}</p>
//                         <p>Charges: {slot.charges}</p>
//                         <p>Status: {slot.status}</p>
//                         <button onClick={() => handleRemoveSlot(slot)}>Remove Slot</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;




import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
    const [slots, setSlots] = useState([]);
    const [newSlot, setNewSlot] = useState({ slot: '', area: '', carType: '', charges: '', status: '' });

    useEffect(() => {
        fetch('http://localhost:4000/data')
            .then(response => response.json())
            .then(data => setSlots(data))
            .catch(error => {
                console.error('Error fetching data:', error);
                toast.error('❌ Error fetching slot data');
            });
    }, []);

    const handleAddSlot = () => {
        const isDuplicate = slots.some(slot => slot.slot === newSlot.slot && slot.area === newSlot.area);
        if (isDuplicate) {
            toast.warn('⚠️ This slot is already present!');
            return;
        }

        const updatedSlots = [...slots, newSlot];
        setSlots(updatedSlots);

        fetch('http://localhost:4000/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newSlot),
        })
            .then(response => response.json())
            .then(() => toast.success('✅ Slot added successfully!'))
            .catch(error => {
                console.error('Error adding slot:', error);
                toast.error('❌ Error adding slot!');
            });

        setNewSlot({ slot: '', area: '', carType: '', charges: '', status: '' });
    };

    const handleRemoveSlot = (slotToRemove) => {
        fetch(`http://localhost:4000/data/${slotToRemove.id}`, {
            method: 'DELETE',
        })
            .then(() => {
                const updatedSlots = slots.filter(slot => slot.id !== slotToRemove.id);
                setSlots(updatedSlots);
                toast.success('✅ Slot removed successfully!');
            })
            .catch(error => {
                console.error('Error removing slot:', error);
                toast.error('❌ Error removing slot!');
            });
    };

    return (
        <div className="admin-container">
            <h1 id="admin">Admin Panel - Manage Parking Slots</h1>
            <div className="add-slot-form">
                <input
                    type="text"
                    placeholder="Slot Id"
                    value={newSlot.slot}
                    onChange={(e) => setNewSlot({ ...newSlot, slot: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Area"
                    value={newSlot.area}
                    onChange={(e) => setNewSlot({ ...newSlot, area: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Car Type"
                    value={newSlot.carType}
                    onChange={(e) => setNewSlot({ ...newSlot, carType: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Charges"
                    value={newSlot.charges}
                    onChange={(e) => setNewSlot({ ...newSlot, charges: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Status"
                    value={newSlot.status}
                    onChange={(e) => setNewSlot({ ...newSlot, status: e.target.value })}
                />
                <button onClick={handleAddSlot}>Add Slot</button>
            </div>

            <div className="slot-list">
                {slots.map((slot, index) => (
                    <div key={index} className="slot-item" data-aos="flip-right" data-aos-duration="1000">
                        <p>Slot: {slot.slot}</p>
                        <p>Area: {slot.area}</p>
                        <p>Car Type: {slot.carType}</p>
                        <p>Charges: {slot.charges}</p>
                        <p>Status: {slot.status}</p>
                        <button onClick={() => handleRemoveSlot(slot)}>Remove Slot</button>
                    </div>
                ))}
            </div>

            {/* Toast container for pop-up messages */}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};
export default AdminDashboard;

