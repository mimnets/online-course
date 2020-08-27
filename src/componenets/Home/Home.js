import React, { useState, useEffect } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Home = () => {
  const [course, setCourse] = useState([]);
        // console.log(course);
        useEffect(() => {
        fetch('https://docs.microsoft.com/api/learn/catalog/?modules=15')
        .then(res => res.json())
        .then(data => setCourse(data.modules))
        .catch(err => console.log(err))
        },[])
  return (
    <div className="home-container">
      <div className="course-container">
      <h1>Microsoft Learn Catalog</h1>
        
        {
          course.slice(10,25).map(modules => <Course catalogue ={modules}></Course>)
        }
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;