import React from 'react';
import { useParams } from 'react-router-dom';
import './StudentProfile.css';

const StudentProfile = () => {
  const { studentName } = useParams(); // Assuming name is passed as a URL parameter

  return (
    <div className="student-profile-container">
      <h1 className="student-profile-title">Student Profile</h1>
      <div className="student-profile-details">
        <p><strong>Name:</strong> {studentName}</p>
        {/* Add other profile details here */}
      </div>
    </div>
  );
};

export default StudentProfile;
