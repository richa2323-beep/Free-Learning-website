import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import courses from '../assets/data/Couses';


import CourseCard from '../Components/CourseCard';

const Home = () => {

  const topCourses = courses.slice(0, 3);

  return (
    <section className="home-section">
      { }
      <div className="hero">
        <h1>Welcome to LearnFree!</h1>
        <p>Explore free high-quality courses and boost your skills.</p>
        <Link to="/courses" className="cta-button">Browse Courses</Link>
      </div>

      { }
      <div className="why-choose-us">
        <h2>Why Choose LearnFree?</h2>
        <div className="features">
          <div className="feature-box">
            <h3>Free & Accessible</h3>
            <p>All our courses are 100% free with lifetime access.</p>
          </div>
          <div className="feature-box">
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with real-world experience.</p>
          </div>
          <div className="feature-box">
            <h3>Practical Learning</h3>
            <p>Hands-on projects, quizzes, and certifications.</p>
          </div>
        </div>
      </div>


      <div className="top-courses">
        <h2>Top Courses</h2>
        <div className="course-preview">
          {topCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <Link to="/courses" className="view-all-button">View All Courses</Link>
      </div>
    </section>
  );
};

export default Home;
