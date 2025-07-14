import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import courses from '../assets/data/Couses';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');


  const categories = ['All', ...new Set(courses.map(course => course.category))];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || course.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <div className="controls" style={{ display: 'flex', gap: '1rem', marginBottom: '20px', padding: '0 1rem' }}>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.5rem', flex: '1' }}
        />
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} style={{ padding: '0.5rem' }}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="course-container">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No courses found.</p>
        )}
      </div>
    </main>
  );
};

export default Courses;
