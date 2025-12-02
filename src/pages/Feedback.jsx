
import React, { useState, useEffect } from 'react';
import './Feedback.css';

const Feedback = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [feedbackList, setFeedbackList] = useState([]);

    // Load username on component mount
    useEffect(() => {
        const storedName = localStorage.getItem('username');
        if (storedName) {
            setName(storedName);
        }

        // Fetch previous feedback from JSON file
        fetch('http://localhost:1000/feedback')
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setFeedbackList(data);
                } else {
                    console.error('Error: Invalid feedback data format.');
                }
            })
            .catch((error) => console.error('Error fetching feedback:', error));
    }, []);

    // Handle feedback submission
    const handleSubmit = () => {
        if (feedback.trim()) {
            const newFeedback = { name, feedback };

            // Post new feedback to JSON file
            fetch('http://localhost:1000/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFeedback)
            })
            .then((response) => response.json())
            .then((data) => {
                setFeedbackList([...feedbackList, data]); // Display new feedback immediately
                setFeedback(''); // Clear textarea after submission
            })
            .catch((error) => console.error('Error submitting feedback:', error));
        } else {
            alert('⚠️ Please enter your feedback before submitting.');
        }
    };

    return (
        <div className='feed-container'>
        <div className="feedback-container">
            <h2>We Value Your Feedback!!</h2>
            <input
                type="text"
                value={name}
                readOnly
            />
            <textarea
                placeholder="Enter your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button onClick={handleSubmit}>Submit</button>

            {/* Display Previous Feedback */}
            <div className="feedback-list">
                <h3>Previous Feedback</h3>
                {feedbackList.length > 0 ? (
                    feedbackList.map((item, index) => (
                        <div key={index} className="feedback-item">
                            <strong>{item.name}</strong>: {item.feedback}
                        </div>
                    ))
                ) : (
                    <p>No feedback available.</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default Feedback;

