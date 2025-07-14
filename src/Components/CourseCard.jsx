import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <a href={course.link} target="_blank" rel="noreferrer">Start Course</a>
    </div>
  );
};

export default CourseCard;
