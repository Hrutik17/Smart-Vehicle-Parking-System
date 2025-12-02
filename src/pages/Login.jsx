
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: ''
//     });

//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

    
//     const validateForm = () => {
//         const newErrors = {};

        
//         const usernameRegex = /^[A-Za-z\s]{3,}$/;
//         if (!formData.username.trim()) {
//             newErrors.username = '⚠️ Username is required.';
//         } else if (!usernameRegex.test(formData.username)) {
//             newErrors.username = '⚠️ Username must have at least 3 characters and contain only letters and spaces.';
//         }

        
//         const emailRegex = /^(?=.*[!@#$%^&*])(?=.*\d)[\w!@#$%^&*]+@[\w.-]+\.\w{2,}$/;
//         if (!formData.email.trim()) {
//             newErrors.email = '⚠️ Email is required.';
//         } else if (!emailRegex.test(formData.email)) {
//             newErrors.email = '⚠️ Email must include a special character, a number, and be in valid format.';
//         }

        
//         const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d).{7,}$/;
//         if (!formData.password.trim()) {
//             newErrors.password = '⚠️ Password is required.';
//         } else if (!passwordRegex.test(formData.password)) {
//             newErrors.password = '⚠️ Password must be at least 7 characters with 1 special character and number.';
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

    
//     const handleLogin = (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             localStorage.setItem('isLoggedIn', 'true');
//             localStorage.setItem('username', formData.username); 
//             alert(`✅ Welcome, ${formData.username}!`);
//             navigate('/home');
//         } else {
//             alert('❌ Please fix the errors before proceeding.');
//         }
//     };

//     return (
//         <div className="login-container">
//             <div className="login-box">
//                 <h2>Login</h2>
//                 <form onSubmit={handleLogin}>
//                     <input
//                         type="text"
//                         name="username"
//                         placeholder="Username"
//                         value={formData.username}
//                         onChange={handleChange}
//                     />
//                     {errors.username && <p className="error">{errors.username}</p>}

//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     {errors.email && <p className="error">{errors.email}</p>}

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                     {errors.password && <p className="error">{errors.password}</p>}

//                     <button type="submit">Login</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    const usernameRegex = /^[A-Za-z\s]{3,}$/;
    if (!formData.username.trim()) {
      newErrors.username = '⚠️ Username is required.';
    } else if (!usernameRegex.test(formData.username)) {
      newErrors.username = '⚠️ Username must have at least 3 characters and contain only letters and spaces.';
    }

    const emailRegex = /^(?=.*[!@#$%^&*])(?=.*\d)[\w!@#$%^&*]+@[\w.-]+\.\w{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = '⚠️ Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = '⚠️ Email must include a special character, a number, and be in valid format.';
    }

    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d).{7,}$/;
    if (!formData.password.trim()) {
      newErrors.password = '⚠️ Password is required.';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = '⚠️ Password must be at least 7 characters with 1 special character and number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', formData.username);
      toast.success(`✅ Welcome, ${formData.username}!`, {
        position: 'top-right',
        autoClose: 2000,
        onClose: () => navigate('/home'),
      });
    } else {
      toast.error('❌ Please fix the errors before proceeding.', {
        position: 'top-right',
        autoClose: 3000
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
