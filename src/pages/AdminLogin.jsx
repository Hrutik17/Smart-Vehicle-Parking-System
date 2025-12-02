import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === 'Hrutik@123' && password === '123') {
            localStorage.setItem('isAdmin', 'true');
            navigate('/admin-dashboard');
        } else {
            alert('Invalid email or password!');
        }
    };

    return (
        <div className="admin-login">
            <h2>Admin Login</h2>
            <form className="box" onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter Admin Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter Admin Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" id="button">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
