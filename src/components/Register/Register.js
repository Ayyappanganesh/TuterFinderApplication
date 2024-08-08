// src/components/Register.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const handleStudentRegister = () => {
    navigate('/StudentRegister');
  };

  const handleTeacherRegister = () => {
    navigate('/TeacherRegister');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="register-options">
        <div className="register-option" onClick={handleStudentRegister}>
          <h3>Register as Student</h3>
        </div>
        <div className="register-option" onClick={handleTeacherRegister}>
          <h3>Register as Teacher</h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
