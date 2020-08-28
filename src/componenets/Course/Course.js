import React from 'react';
import '../Course/Course.css'
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Course = (props) => {
    const {title, summary, icon_url, url, duration_in_minutes, levels} = props.course;
    return (
        <div className="course">

            <Container>   
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={icon_url} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {summary}
                </Card.Text>
                <Card.Text>
                Price : ${duration_in_minutes}
                </Card.Text>
                <Card.Text>
                Learning Level : {levels}
                </Card.Text>
                <Card.Text>
                <a href={url} target="_blank" rel="noopener noreferrer">More details about this course</a>
                </Card.Text>
                <Button variant="primary" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</Button>
                </Card.Body>
                </Card>
            </Container>

            {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={icon_url} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {summary}
            </Card.Text>
            <Card.Text>
            Price : ${duration_in_minutes}
            </Card.Text>
            <Card.Text>
            Learning Level : {levels}
            </Card.Text>
            <Card.Text>
            <a href={url} target="_blank" rel="noreferrer">More details about this course</a>
            </Card.Text>
            <Button variant="primary" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</Button>
            </Card.Body>
            </Card> */}
            
            {/* <div className="course-name">
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
                <Button variant="primary" 
                onClick={() => props.handleAddCourse(props.course)}>Enroll Now</Button>

                </div> */}
                
            </div>
    );
};

export default Course;