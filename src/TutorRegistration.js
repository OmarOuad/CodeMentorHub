// TutorRegistration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationSuccess from './RegistrationSuccess';
import Navbar from './components/navbar/Nav';
import { useTranslation } from 'react-i18next';

import './TutorRegistration.css'; // Import custom CSS file for styling

const TutorRegistration = () => {
  const { t, i18n } = useTranslation();

  // Language switch handler
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  const [email, setEmail] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [major, setMajor] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [step, setStep] = useState(1);
  const [emailError, setEmailError] = useState('');
  const [yearError, setYearError] = useState('');
  const [majorError, setMajorError] = useState('');
  const [languagesError, setLanguagesError] = useState('');
  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState('');

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(value.endsWith('@uottawa.ca') ? '' : 'Please enter a uOttawa email address.');
  };

  const handleYearOfStudyChange = (event) => {
    const { value } = event.target;
    setYearOfStudy(value);
    setYearError(value ? '' : 'Please select your year of study.');
  };

  const handleMajorChange = (event) => {
    const { value } = event.target;
    setMajor(value);
    setMajorError(value ? '' : 'Please enter your major of study.');
  };

  const handleLanguageChanges = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLanguages([...selectedLanguages, value]);
    } else {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== value));
    }
    setLanguagesError(selectedLanguages.length ? '' : 'Please select at least one programming language.');
  };

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can add validation here if needed (e.g., file size, file type).
      // For simplicity, we are not doing any validation here.
      setResume(file);
      setResumeError('');
    } else {
      setResume(null);
      setResumeError('Please upload your resume.');
    }
  };

  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1) {
      // Validate Step 1 fields
      if (!email.endsWith('@uottawa.ca')) {
        setEmailError('Please enter a uOttawa email address.');
        return;
      } else {
        setEmailError('');
      }

      if (!yearOfStudy) {
        setYearError('Please select your year of study.');
        return;
      } else {
        setYearError('');
      }

      if (!major) {
        setMajorError('Please enter your major of study.');
        return;
      } else {
        setMajorError('');
      }

      setStep(2);
    } else if (step === 2) {
      // Validate Step 2 fields

      if (!resume) {
        setResumeError('Please upload your resume.');
        return;
      } else {
        setResumeError('');
      }

      // Save the tutor registration details to the backend or handle them as per your requirements
      console.log({
        email,
        yearOfStudy,
        major,
        selectedLanguages,
        resume, // This will contain the uploaded resume file
      });

      // Clear the form and navigate to the next page
      setEmail('');
      setYearOfStudy('');
      setMajor('');
      setSelectedLanguages([]);
      setResume(null);
      setStep(1);

      // Redirect to the success page after successful registration
      navigate('/CodeMentorHub/RegistrationSuccess');
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className="dark-purple-background">
      <Navbar onLanguageChange={handleLanguageChange} />
      <div className="container mt-5 tutor-registration-form">
        {step === 1 && (
          <div>
            <h2 className="text-center text-white">Tutor Registration - Step 1</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">
                Email (Must end with @uottawa.ca):
              </label>
              <input
                type="email"
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <div className="invalid-feedback text-white">{emailError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="yearOfStudy" className="form-label text-white">
                Year of Study:
              </label>
              <select
                className={`form-control ${yearError ? 'is-invalid' : ''}`}
                id="yearOfStudy"
                value={yearOfStudy}
                onChange={handleYearOfStudyChange}
              >
                <option value="">Select Year of Study</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="5th Year">5th Year</option>
                {/* Add more options as needed */}
              </select>
              {yearError && <div className="invalid-feedback text-white">{yearError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="major" className="form-label text-white">
                Major of Study:
              </label>
              <input
                type="text"
                className={`form-control ${majorError ? 'is-invalid' : ''}`}
                id="major"
                value={major}
                onChange={handleMajorChange}
              />
              {majorError && <div className="invalid-feedback text-white">{majorError}</div>}
            </div>
            <button className="btn btn-primary" onClick={handleNext}>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-center text-white">Tutor Registration - Step 2</h2>
            <div className="mb-3">
              <label htmlFor="languages" className="form-label text-white">
                Select Programming Languages (Choose multiple):
              </label>
              <div className="mb-3">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="javascript"
                    value="JavaScript"
                    checked={selectedLanguages.includes('JavaScript')}
                    onChange={handleLanguageChanges}
                  />
                  <label className="form-check-label" htmlFor="javascript">
                    JavaScript
                  </label>
                </div>
                {/* Add more language options */}
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="python"
                    value="Python"
                    checked={selectedLanguages.includes('Python')}
                    onChange={handleLanguageChanges}
                  />
                  <label className="form-check-label" htmlFor="python">
                    Python
                  </label>
                </div>
                {/* Add more languages as needed */}
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Cplus"
                    value="Cplus"
                    checked={selectedLanguages.includes('Cplus')}
                    onChange={handleLanguageChanges}
                  />
                  <label className="form-check-label" htmlFor="Cplus">
                    C++
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="C"
                    value="C"
                    checked={selectedLanguages.includes('C')}
                    onChange={handleLanguageChanges}
                  />
                  <label className="form-check-label" htmlFor="C">
                    C
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Java"
                    value="Java"
                    checked={selectedLanguages.includes('Java')}
                    onChange={handleLanguageChanges}
                  />
                  <label className="form-check-label" htmlFor="Java">
                  Java
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="PhP"
                    value="PhP"
                    checked={selectedLanguages.includes('PhP')}
                    onChange={handleLanguageChanges}
                  />
                  <label className="form-check-label" htmlFor="PhP">
                  PhP
                  </label>
                </div>
              </div>
              {languagesError && <div className="invalid-feedback text-white">{languagesError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="resume" className="form-label text-white">
                Upload Your Resume (PDF or Word document):
              </label>
              <input
                type="file"
                className={`form-control ${resumeError ? 'is-invalid' : ''}`}
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeChange}
              />
              {resumeError && <div className="invalid-feedback text-white">{resumeError}</div>}
            </div>
            <button className="btn btn-secondary" onClick={handleBack}>
              Back
            </button>
            <button className="btn btn-primary" onClick={handleNext}>
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorRegistration;
