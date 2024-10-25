
import React from 'react';

const CourseList = ({ courses }) => {
  return (
    
    <div className="course-list">
      <h2>Available Courses</h2>
      <hr></hr>
      <div className='list'>
      <ul>
        
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        
        ))}
      </ul>
          </div>
    </div>
  );
}

export default CourseList;
