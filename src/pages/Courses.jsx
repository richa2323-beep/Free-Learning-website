import React, { useState } from 'react';
import CourseCard from '../Components/CourseCard';
import courses from '../assets/data/Couses';

const Courses = () => {
  // Extract unique categories
  const categories = [...new Set(courses.map(course => course.category))];

  // Set the first category as the default filter
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState(categories[0]);

  // Filter courses based on search and category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = course.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      {/* Controls */}
      <div className="controls" style={{ display: 'flex', gap: '1rem', marginBottom: '20px', padding: '0 1rem' }}>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.5rem', flex: '1' }}
        />
        
      </div>

      {/* Courses */}
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
