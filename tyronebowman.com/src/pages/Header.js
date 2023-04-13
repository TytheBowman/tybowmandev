import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { useEffect } from 'react';
import { Link } from 'react-scroll';


const Header = (props) => {

    useEffect(() => {
        document.title = "Tyrone Bowman";
    });

    return(
            <div className="main">
            <div className="header hero">
                <Container>
                    <Row style={{textAlign: 'center'}}>
                        <Col>
                            <h2 className="h-title">Hi! My name is</h2>
                            <h1 className="h-lead">
                                Tyrone
                                <span style={{color: 'blue'}}> Bowman</span>
                            </h1>
                            <h3 className='h-body'>A full stack applications developer who specializes in building websites and applications.</h3>
                        </Col>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                    <Link to="projects" spy={true} smooth={true} duration={50}>
                        <button className='bttn'>
                                View Projects
                        </button>
                    </Link>
                    </Row>
                </Container>
            </div>
            </div>
    )
}

export default Header;