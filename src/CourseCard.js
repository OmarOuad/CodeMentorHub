import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ language, field, price, logo, id }) => {
  return (
    <div className="course-card">
      {/* Wrap the contents of the card with the Link component */}
      <Link to={`/CodeMentorHub/course/${id}`} className="course-card-link">
        <div className="course-header">
          <img src={logo} alt={`${language} logo`} />
        </div>
        <div className="course-body">
          <h3>{language}</h3>
          <p>Field: {field}</p>
          <p>{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
