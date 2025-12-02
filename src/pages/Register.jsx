

// import React, { useState } from 'react';
// import './Register.css';

// const Registration = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         mobile: ''
//     });

//     const [errors, setErrors] = useState({});

    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const validateForm = () => {
//         const newErrors = {};

       
//         const nameRegex = /^[A-Za-z\s]{3,}$/;
//         if (!formData.fullName.trim()) {
//             newErrors.fullName = '⚠️ Full Name is required.';
//         } else if (!nameRegex.test(formData.fullName)) {
//             newErrors.fullName = '⚠️ Full Name must have at least 3 letters and contain only alphabets.';
//         }

        
//         const emailRegex = /^(?=.*[!@#$%^&*])(?=.*\d)[\w!@#$%^&*]+@[\w.-]+\.\w{2,}$/;
//         if (!formData.email.trim()) {
//             newErrors.email = '⚠️ Email is required.';
//         } else if (!emailRegex.test(formData.email)) {
//             newErrors.email = '⚠️ Email must contain a special character, a number, and be in a valid format.';
//         }

        
//         const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d).{7,}$/;
//         if (!formData.password.trim()) {
//             newErrors.password = '⚠️ Password is required.';
//         } else if (!passwordRegex.test(formData.password)) {
//             newErrors.password = '⚠️ Password must have at least 7 characters with 1 special character and 1 number.';
//         }

        
//         if (!formData.confirmPassword.trim()) {
//             newErrors.confirmPassword = '⚠️ Confirm password is required.';
//         } else if (formData.confirmPassword !== formData.password) {
//             newErrors.confirmPassword = '❌ Passwords do not match.';
//         }

      
//         const mobileRegex = /^[0-9]{10}$/;
//         if (!formData.mobile.trim()) {
//             newErrors.mobile = '⚠️ Mobile number is required.';
//         } else if (!mobileRegex.test(formData.mobile)) {
//             newErrors.mobile = '⚠️ Mobile number must be 10 digits.';
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

   
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             alert(`✅ Registration Successful! Welcome, ${formData.fullName}!`);
//             setFormData({
//                 fullName: '',
//                 email: '',
//                 password: '',
//                 confirmPassword: '',
//                 mobile: ''
//             });
//         } else {
//             alert('❌ Please fix the errors before proceeding.');
//         }
//     };

//     return (
//         <div className="registration-container">
//             <div className="registration-box">
//                 <h2>Register</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="fullName"
//                         placeholder="Full Name"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                     />
//                     {errors.fullName && <p className="error">{errors.fullName}</p>}

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

//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                     />
//                     {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

//                     <input
//                         type="text"
//                         name="mobile"
//                         placeholder="Mobile Number"
//                         value={formData.mobile}
//                         onChange={handleChange}
//                     />
//                     {errors.mobile && <p className="error">{errors.mobile}</p>}

//                     <button type="submit">Register</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Registration;




import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        const nameRegex = /^[A-Za-z\s]{3,}$/;
        if (!formData.fullName.trim()) {
            newErrors.fullName = '⚠️ Full Name is required.';
        } else if (!nameRegex.test(formData.fullName)) {
            newErrors.fullName = '⚠️ Full Name must have at least 3 letters and contain only alphabets.';
        }

        const emailRegex = /^(?=.*[!@#$%^&*])(?=.*\d)[\w!@#$%^&*]+@[\w.-]+\.\w{2,}$/;
        if (!formData.email.trim()) {
            newErrors.email = '⚠️ Email is required.';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = '⚠️ Email must contain a special character, a number, and be in a valid format.';
        }

        const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d).{7,}$/;
        if (!formData.password.trim()) {
            newErrors.password = '⚠️ Password is required.';
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = '⚠️ Password must have at least 7 characters with 1 special character and 1 number.';
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = '⚠️ Confirm password is required.';
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = '❌ Passwords do not match.';
        }

        const mobileRegex = /^[0-9]{10}$/;
        if (!formData.mobile.trim()) {
            newErrors.mobile = '⚠️ Mobile number is required.';
        } else if (!mobileRegex.test(formData.mobile)) {
            newErrors.mobile = '⚠️ Mobile number must be 10 digits.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            toast.success(`✅ Registration Successful! Welcome, ${formData.fullName}!`, {
                position: 'top-right',
                autoClose: 3000
            });
            setFormData({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
                mobile: ''
            });
        } else {
            toast.error('❌ Please fix the errors before proceeding.', {
                position: 'top-right',
                autoClose: 3000
            });
        }
    };

    return (
        <div className="registration-container">
            <div className="registration-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <p className="error">{errors.fullName}</p>}

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

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    {errors.mobile && <p className="error">{errors.mobile}</p>}

                    <button type="submit">Register</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;
