// src/components/About.jsx
import React from 'react';
import './About.css';
import { FaChalkboardTeacher, FaGraduationCap, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h1>About <span className="highlight">LearnFree</span></h1>
        <p>
          LearnFree is a platform offering <strong>free, high-quality educational content</strong>
          to boost your skills and career. Whether you're a student, job seeker, or lifelong learner,
          we’ve got something for you!
        </p>
      </div>

      <div className="features">
        <div className="feature-card">
          <FaChalkboardTeacher className="feature-icon" />
          <h3>Expert Instructors</h3>
          <p>Our courses are taught by industry experts and experienced educators from around the globe.</p>
        </div>
        <div className="feature-card">
          <FaGraduationCap className="feature-icon" />
          <h3>Career-Focused Content</h3>
          <p>We focus on job-ready skills including programming, design, marketing, and more.</p>
        </div>
        <div className="feature-card">
          <FaGlobe className="feature-icon" />
          <h3>Global Access</h3>
          <p>Learn from anywhere in the world at your own pace—completely free of cost!</p>
        </div>
      </div>

      <div className="about-footer">
        <h4>Join thousands of learners and start your journey with LearnFree today!</h4>
      </div>
    </section>
  );
};

export default About;
