// RegistrationSuccess.js
import React from 'react';
import checkmark from './assets/checkmark.png';
import { useNavigate } from 'react-router-dom';
import './RegistrationSuccess.css'; // Import custom CSS file for styling
import Navbar from './components/navbar/Nav';
import { useTranslation } from 'react-i18next';

const RegistrationSuccess = () => {
  const { t, i18n } = useTranslation();

  // Language switch handler
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  const navigate = useNavigate();

  const handleReturnToHome = () => {
    // Replace "/home" with the actual URL of your home page
    navigate("/CodeMentorHub/home");
  };

  return (
    <div>
      <Navbar onLanguageChange={handleLanguageChange} />
    <div className="container mt-5 registration-success">
      <h2 className="text-white">Registration Successful!</h2>
      <div className="text-center">
        <img src={checkmark} alt="Green Tick" className="checkmark-img" />
      </div>
      <p className="text-white">Thank you for registering as a tutor. We will review your resume and we shall be in touch with you for an interview if we think you are well qualified to be a tutor in the selected programming languages.</p>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleReturnToHome}>
          Return to Home
        </button>
      </div>
    </div>
    </div>
  );
};

export default RegistrationSuccess;
