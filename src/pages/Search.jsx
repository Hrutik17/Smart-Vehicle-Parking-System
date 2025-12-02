

import React, { useEffect, useState } from 'react';
import "./Search.css"
const Search = () => {
    const [slots, setSlots] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/data')
            .then(response => response.json())
            .then(data => setSlots(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSearch = () => {
        const foundSlot = slots.find(slot => slot.slot.toString() === searchTerm.trim());
        setSearchResult(foundSlot || 'No matching slot found.');
    };

    return (
        <div className="search-container">
            <div className="search-box">
            <h2><marquee direction="right" scrollamount="7">Search Parking Slot</marquee></h2>
            <input 
                type="text" 
                placeholder="Enter Slot ID..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>

            {searchResult && (
                <div className="search-result">
                    {typeof searchResult === 'string' ? (
                        <p>{searchResult}</p>
                    ) : (
                        <div>
                            <p>Slot: {searchResult.slot}</p>
                            <p>Area: {searchResult.area}</p>
                            <p>Charges: ₹{searchResult.charges}</p>
                            <p>Car Type: {searchResult.carType}</p>
                            <p>Status: {searchResult.status}</p>
                            
                        </div>
                    )}
                </div>
            )}
        </div>
        </div>
    );
};

export default Search;


