// Experience.js
import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience">
      <h1 className={`${styles['section-heading']} ${styles.mb75px}`}>
        <span>
          <i className="fas fa-briefcase"></i>
        </span>
        <span> EXPERIENCE </span>
      </h1>

      <div id="experience-container" className={styles['experience-container']}>
        {/* Add your experience items */}
        <div className={styles['experience-item']}>
          <h3>Job Title</h3>
          <p>
            <span>Company Name</span> - Location
          </p>
          <p>
            <span>Date:</span> Month Year - Month Year
          </p>
          <p>Description of your responsibilities and achievements.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
