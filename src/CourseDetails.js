import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import courses from './courseData'; // Import the courses array
import './CourseDetails.css'; // Import the custom CSS file for additional styling
import Navbar from './components/navbar/Nav';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

const CourseDetails = () => {
  const { t, i18n } = useTranslation();

  // Language switch handler
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  const { id } = useParams();

  // Find the course details based on the extracted course ID
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
  <div>
      <Navbar onLanguageChange={handleLanguageChange} />
    <Container className="course-details">
        
      <h2 className="course-title">{course.language}</h2>
      <Row>
        <Col md={6}>
          <div className="course-info">
            <h4>Field:</h4>
            <p>{course.field}</p>
            <h4>Price:</h4>
            <p>{course.price}</p>
            {/* Add more course details here if needed */}
          </div>
        </Col>
        <Col md={6}>
          <div className="course-description">
            <h4>Details:</h4>
            <p>{course.details}</p>
            {/* Display other details from the 'course' object here */}
          </div>
        </Col>
      </Row>
      <div className="button-container">
        <Link to="/CodeMentorHub/BuyCourses" className="btn btn-primary buy-btn">
          Buy Course
        </Link>
        <Link to="/CodeMentorHub/courses" className="btn btn-secondary return-btn">
          Back to Previous Page
        </Link>
      </div>
    </Container>
    <Footer />
    </div>
  );
};

export default CourseDetails;
