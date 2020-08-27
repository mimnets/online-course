import React, { useState, useEffect } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import '../Home/Home.css'

const Home = () => {
  const [course, setCourse] = useState([]);
  let [cart, setCart] = useState([]);
  const handleAddCourse = (course) =>{
    const newCart = [...cart, course];
    setCart(newCart);
  }
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
      <h1>Microsoft Learn Catalogue</h1>
        
        {
          course.slice(10,25).map(modules => <Course 
            handleAddCourse ={handleAddCourse}
            course={modules}></Course>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;