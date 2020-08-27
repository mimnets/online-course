import React from 'react';
import '../Course/Course.css'

const Course = (props) => {
    const {title, summary, icon_url, url, duration_in_minutes, levels} = props.course;
    return (
        <div className="course">
            <div className="course-name">
                <h4>Course Name: {title}</h4>
                <p>{summary}</p>
                <br/>
                <p>Learning Level : <strong>{levels}</strong></p>
                <p>Price : ${duration_in_minutes}</p>
                <p><a href={url} target="_blank" rel="noreferrer">More Details</a></p>
                <div>
                    <img src={icon_url} alt=""/>
                </div>
                <button className="main-button" 
                onClick={() => props.handleAddCourse(props.course)}>Enrol Now</button>
                </div>
            </div>
    );
};

export default Course;