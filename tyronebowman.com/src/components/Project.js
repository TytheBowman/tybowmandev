import React from 'react';
import {Card, Button, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = (props) => {

    return (
      <Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Col>
          <Row><Button variant="primary" href={props.gitLink}>View The Code</Button></Row>
        </Col>
      </Card.Body>
    </Card>
    )
}

export default Projects;