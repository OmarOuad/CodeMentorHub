// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './Courses';
import Home from './Home';
import Discussions from './Discussions';
import Ourteams from './Ourteams';
import Test from './Test';
import CourseDetails from './CourseDetails'; // Import the CourseDetails component
import BuyCourse from './BuyCourse';
import PurchaseSuccess from './PurchaseSuccess';
import TutorRegistration from './TutorRegistration';
import RegistrationSuccess from './RegistrationSuccess';
import FAQPage from './Faqpage'
// Import the required i18next modules
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
      },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CodeMentorHub" element={<Home />} />
        <Route path="/CodeMentorHub/home" element={<Home />} />
        <Route path="/CodeMentorHub/courses" element={<Courses />} />
        <Route path="/CodeMentorHub/course/:id" element={<CourseDetails />} /> {/* New route for course details */}
        <Route path="/CodeMentorHub/discussions" element={<Discussions />} />
        <Route path="/CodeMentorHub/ourteams" element={<Ourteams />} />
        <Route path="/CodeMentorHub/tests" element={<Test />} />
        <Route path="/CodeMentorHub/BuyCourses" element={<BuyCourse />} />
        <Route path="/CodeMentorHub/PurchaseSuccessful" element={<PurchaseSuccess />} />
        <Route path="/CodeMentorHub/TutorRegistration" element={<TutorRegistration />} />
        <Route path="/CodeMentorHub/RegistrationSuccess" element={<RegistrationSuccess />} />
        <Route path="/CodeMentorHub/faqpage" element={<FAQPage />} />
      </Routes>
    </Router>
  );
};

export default App;
