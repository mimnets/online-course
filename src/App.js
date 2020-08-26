import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './componenets/Course/Course';

function App() {
  const [course, setCourse] = useState([]);
  console.log(course);
  useEffect(() => {
    fetch('https://docs.microsoft.com/api/learn/catalog/?modules=15')
    .then(res => res.json())
    .then(data => setCourse(data.modules))
    .catch(err => console.log(err))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <h1>Microsoft Learn Catalog</h1>
        {
          course.slice(10,25).map(modules => <Course title ={modules}></Course>)
        }
      </div>
    </div>
  );
}

export default App;
