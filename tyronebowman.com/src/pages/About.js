import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import { useEffect } from 'react';

export default function About(props) {

    useEffect(() => {
        document.title = "Tyrone Bowman | About";
    });


  return (
    <div className="main">
                <Container className="hero">
                        <Row className='justify-content-center'>
                            <h2 className='h-title'>About Me</h2>
                        </Row>
                        <Row className='justify-content-center'>
                            <h3 className='lead'>Below, you can find additional details about myself, my occupation, and my current proficiency primarily related to coding and technology.</h3>
                        </Row>
                        <Row className='sub-row'>
                            <Col className='sub-col'>
                                <h3 className='sub-col-header'>Get to know me!</h3>
                                <p>As a Full Stack Developer, I take pleasure in constructing Web and Mobile Applications. Take a look at some of my creations showcased in the Projects segment.</p>
                                <p>I also take delight in sharing my knowledge and expertise in web development with other members of the developer community. Please don't hesitate to connect with me or follow me on LinkedIn, where I regularly share valuable insights related to Web Development and Programming.</p>
                                <p>I am interested in exploring job opportunities that offer growth, learning, and opportunities for contribution. If you have a suitable opening that aligns with my qualifications and expertise, please don't hesitate to get in touch with me.</p>
                            </Col>
                            <Col className='sub-col'>
                                <h3 className='sub-col-header'>Skills</h3>
                                <Button className='skill-badge' variant='secondary' disabled>HTML</Button>
                                <Button className='skill-badge' variant='secondary' disabled>CSS</Button>
                                <Button className='skill-badge' variant='secondary' disabled>Javascript</Button>
                                <br />
                                <Button className='skill-badge' variant='secondary' disabled>React JS</Button>
                                <Button className='skill-badge' variant='secondary' disabled>React Native</Button>
                                <Button className='skill-badge' variant='secondary' disabled>Git</Button>
                                <Button className='skill-badge' variant='secondary' disabled>SQL</Button>
                                <Button className='skill-badge' variant='secondary' disabled>Responsive Design</Button>
                            </Col>
                        </Row>
                </Container>
    </div>
  )
}
