import { useEffect } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import BookingSlots from './pages/BookingSlots';
import AdminLogin from './pages/AdminLogin';
import AvailableSlots from './pages/AvailableSlots';
import Search from './pages/Search';
import Contact from './pages/Contact';
import SlotStatus from './pages/SlotStatus';
import AdminDashboard from './pages/AdminDashboard';
import Aos from "aos";
import "aos/dist/aos.css";
import AboutUs from './pages/AboutUs';
import Instruction from './pages/Instruction';
import Feedback from './pages/Feedback';

const ProtectedRoute = ({ element }) => {
  return localStorage.getItem('isLoggedIn') ? element : <Navigate to="/login" />;
};

const AppContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/about" element={<ProtectedRoute element={<AboutUs />} />} />
        <Route path="/available-slots" element={<ProtectedRoute element={<AvailableSlots />} />} />
        <Route path="/search" element={<ProtectedRoute element={<Search />} />} />
        <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
        <Route path="/add-slot" element={<ProtectedRoute element={<BookingSlots />} />} />
        <Route path="/add-new" element={<ProtectedRoute element={<AdminLogin />} />} />
        <Route path="/slots" element={<ProtectedRoute element={<SlotStatus />} />} />
        <Route path="/admin-dashboard" element={<ProtectedRoute element={<AdminDashboard />} />} />
        <Route path="/inst" element={<ProtectedRoute element={<Instruction />} />} />
        <Route path="/feedback" element={<ProtectedRoute element={<Feedback />} />} />
      </Routes>
    </>
  );
};

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
