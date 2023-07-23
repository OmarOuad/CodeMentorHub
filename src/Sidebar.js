import React from 'react';
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onFilterChange, selectedLanguageFilter, selectedFieldFilter }) => {
  const languages = ['all', 'C++', 'Java', 'Python', 'Javascript'];
  const fields = ['all', 'Backend', 'DevOps', 'Mobile Dev', 'Front-end'];

  const handleFilterChange = (languageFilter, fieldFilter) => {
    onFilterChange(languageFilter, fieldFilter);
  };

  return (
    <div className="sidebar">
      <section className="filter-section">
        <h3>Languages</h3>
        {languages.map((language) => (
          <label key={language} className="radio-option">
            <input
              type="radio"
              value={language}
              checked={selectedLanguageFilter === language}
              onChange={() => handleFilterChange(language, selectedFieldFilter)}
            />
            {language}
          </label>
        ))}
      </section>

      <section className="filter-section">
        <h3>Fields</h3>
        {fields.map((field) => (
          <label key={field} className="radio-option">
            <input
              type="radio"
              value={field}
              checked={selectedFieldFilter === field}
              onChange={() => handleFilterChange(selectedLanguageFilter, field)}
            />
            {field}
          </label>
        ))}
      </section>
    </div>
  );
};

export default Sidebar;
