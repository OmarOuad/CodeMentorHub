import React, { useState } from 'react';
import CourseCard from './CourseCard';
import './Courses.css';
import Navbar from './components/navbar/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Footer from './components/Footer';

// Import the courses array from the separate file
import courses from './courseData';

const Courses = () => {
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState('all');
  const [selectedFieldFilter, setSelectedFieldFilter] = useState('all');

  const handleFilterChange = (languageFilter, fieldFilter) => {
    setSelectedLanguageFilter(languageFilter);
    setSelectedFieldFilter(fieldFilter);
  };

  const filteredCourses = courses.filter((course) => {
    const matchLanguage =
      selectedLanguageFilter === 'all' || course.language === selectedLanguageFilter;
    const matchField = selectedFieldFilter === 'all' || course.field === selectedFieldFilter;
    return matchLanguage && matchField;
  });

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Sidebar
            onFilterChange={handleFilterChange}
            selectedLanguageFilter={selectedLanguageFilter}
            selectedFieldFilter={selectedFieldFilter}
          />
          <div className="course-container">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id} // Pass the 'id' of each course to the CourseCard component
                language={course.language}
                field={course.field}
                price={course.price}
                logo={course.logo}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
