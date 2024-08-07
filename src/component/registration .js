import React, { useState } from 'react';
import './Registration.css'; // Import the CSS file
import LogoImg from './back.png'; // Import the company logo image

const RegistrationForm = () => {
    const [formValues, setFormValues] = useState({
        companyName: '',
        employeeName: '',
        email: '',
        phoneNumber: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formValues);
        }
    };

    const validateForm = () => {
        for (const key in formValues) {
            if (formValues[key].trim() === '') {
                alert(`Please fill in the ${key.split(/(?=[A-Z])/).join(' ')} field.`);
                return false;
            }
        }
        return true;
    };

    return (
        <div className="container">
            <div className="form-wrapper">
                <div className="form-image">
                    <img src={LogoImg} alt="Background" className="background-image" /> {/* Background image */}
                </div>
                <div className="form-content">
                    <p className="subtitle">Transform your customer interactions with our innovative Voice API</p>
                    <h2 className="title">Register</h2>
                    <div className="input-container">
                        <div className="input-group">
                            <input
                                className="input"
                                type="text"
                                name="companyName"
                                placeholder="Company Name"
                                value={formValues.companyName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                className="input"
                                type="text"
                                name="employeeName"
                                placeholder="Employee Name"
                                value={formValues.employeeName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                className="input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                className="input"
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formValues.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                className="input"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="button" onClick={handleSubmit}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;