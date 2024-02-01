// CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = () => {
  return (
    <div className="course-card" style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Course Title</h2>
      <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="/lesson">
        <button style={{ padding: '10px 15px', background: '#007BFF', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}>
          Start Course
        </button>
      </Link>
    </div>
  );
};

export default CourseCard;
