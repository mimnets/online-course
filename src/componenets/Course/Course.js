import React from 'react';

const Course = (props) => {
    const {title, summary, icon_url, url, duration_in_minutes, levels} = props.title;
    return (
        <div>
            <h3>Course Name: {title}</h3>
            <p>{summary}</p>
            <p>Learning Level : <strong>{levels}</strong></p>
            <p>Price : ${duration_in_minutes}</p>
            <p><a href={url} target="_blank">More Details</a></p>
            <div>
            <img src={icon_url} alt=""/>
            <button>Enrol Now</button>
            </div>
        </div>
    );
};

export default Course;