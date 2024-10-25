import React, { useState, useEffect } from 'react';
import CourseList from './components/CourseList';
import ContactForm from './components/ContactForm';
import axios from 'axios';
import './App.css';  

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:5000/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Online Course Catalog</h1>
      <hr></hr>
      <CourseList courses={courses} />
      <ContactForm />
    </div>
  );
}

export default App;
