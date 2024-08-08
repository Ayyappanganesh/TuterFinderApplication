// SearchResults.js
import React, { useState, useEffect } from 'react';
import TeacherList from './TeacherList';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const [teachers, setTeachers] = useState([]);

  // Mock data - replace this with API call if needed
  const mockTeachers = [
    { id: 1, name: 'John Doe', subject: 'Math', board: 'CBSE', state: 'California', district: 'Los Angeles', standard: 'X' },
    // Add more mock teachers
  ];

  useEffect(() => {
    // Here you would fetch the data based on search criteria
    // For demonstration, we're using mock data
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const subject = searchParams.get('subject');
    const boards = searchParams.get('boards');
    const state = searchParams.get('state');
    const district = searchParams.get('district');
    const std = searchParams.get('std');

    // Filter mock data based on search criteria
    const filteredTeachers = mockTeachers.filter((teacher) => {
      return (
        (!name || teacher.name.includes(name)) &&
        (!subject || teacher.subject.includes(subject)) &&
        (!boards || teacher.board === boards) &&
        (!state || teacher.state === state) &&
        (!district || teacher.district === district) &&
        (!std || teacher.standard === std)
      );
    });

    setTeachers(filteredTeachers);
  }, [location.search]);

  return (
    <div className='search-results'>
      <TeacherList teachers={teachers} />
    </div>
  );
};

export default SearchResults;
