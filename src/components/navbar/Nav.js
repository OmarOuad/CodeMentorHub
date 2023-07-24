import { Link } from "react-router-dom";
import './Nav.css';
import { useTranslation } from 'react-i18next';

const Navbar = ({ onLanguageChange }) => {
  const title = "CodeMentorHub";
  const { t } = useTranslation();

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to='/CodeMentorHub/home'>
          <h1>{title}</h1>
        </Link>

        <div className="links">
          <Link to='/CodeMentorHub/home'>{t('navbar.home')}</Link>
          <Link to='/CodeMentorHub/courses'>{t('navbar.courses')}</Link>
          <Link to='/CodeMentorHub/tests'>{t('navbar.tests')}</Link>
          <Link to='/CodeMentorHub/ourteams'>{t('navbar.our_teams')}</Link>
          <Link to='/CodeMentorHub/faqpage'>FAQ</Link>
          <Link to='/CodeMentorHub/discussions'>{t('navbar.discussions')}</Link>
          
          <a
            href="/CodeMentorHub/TutorRegistration"
            style={{
              color: 'white',
              backgroundColor: '#f1356d',
              borderRadius: '8px'
            }}
          >
            {t('navbar.become_a_tutor')}
          </a>
        </div>
        {/* Language Switch */}
        <div className="language-switch">
          <button
            onClick={() => onLanguageChange('en')}
            style={{ backgroundColor: '#f1356d' }} // Set background color to red
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange('fr')}
            style={{ backgroundColor: '#f1356d' }} // Set background color to red
          >
            FR
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
