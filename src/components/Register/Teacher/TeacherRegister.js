import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import './TeacherRegister.css';

const stateDistrictData = {
  // ... [Your existing state and district data]
};

const TeacherRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
    highestQualification: '',
    yearsOfExperience: '',
    state: '',
    district: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your logic here to send the form data to your server or API
  };

  const navigate = useNavigate();

  const districts = stateDistrictData[formData.state] || [];

  return (
    <div className="teacher-register-container">
      <div className="back-button" onClick={() => navigate('/')}>
        <ArrowCircleLeftIcon />
      </div>
      <div className="teacher-register-content">
        <h1 className="teacher-register-title">Teacher Registration</h1>
        <form className="teacher-register-form" onSubmit={handleSubmit}>
          <div className="teacher-register-form-group">
            <label className="teacher-register-label" htmlFor="firstName">First Name:</label>
            <input
              className="teacher-register-input"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="teacher-register-form-group">
            <label className="teacher-register-label" htmlFor="lastName">Last Name:</label>
            <input
              className="teacher-register-input"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="teacher-register-form-group">
            <label className="teacher-register-label" htmlFor="email">Email:</label>
            <input
              className="teacher-register-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="teacher-register-form-group">
            <label className="teacher-register-label" htmlFor="password">Password:</label>
            <input
              className="teacher-register-input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="teacher-register-form-group">
            <label className="teacher-register-label" htmlFor="mobileNumber">Mobile Number:</label>
            <input
              className="teacher-register-input"
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="teacher-register-form-group">
            <label className="teacher-register-label" htmlFor="highestQualification">Highest Qualification:</label>
            <input
              className="teacher-register-input"
              type="text"
              id="highestQualification"
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleChange}
              required
            />
          </div>
          <div className="teacher-register-form-group">
            <label className="teacher-register-label" htmlFor="yearsOfExperience">Years of Experience:</label>
            <input
              className="teacher-register-input"
              type="text"
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              required
            />
          </div>
          <div className="teacher-register-form-group">
            <label className="teacher-register-label" htmlFor="state">State:</label>
            <select
              className="teacher-register-select"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              {Object.keys(stateDistrictData).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="teacher-register-form-group">
            <label className="teacher-register-label" htmlFor="district">District:</label>
            <select
              className="teacher-register-select"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
          <button className="teacher-register-button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default TeacherRegister;
