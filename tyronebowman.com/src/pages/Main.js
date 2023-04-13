import React from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import {Container, Row, Col} from 'react-bootstrap';
import { useEffect } from 'react';
import Project from '../components/Project';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import {Outlet} from 'react-router-dom';

const Main = (props) => {

    useEffect(() => {
        document.title = "Tyrone Bowman | BrandNewCode  | Full Stack Applications Developer";
    });

    return(
        <div>
            <div id='home' className="main">
            <Header />
            </div>
            <div id='projects' className='sec'>
                <Projects />
            </div>
            <div id='about' className='sec'>
                <About />
            </div>
            <div id='contact' className='sec'>
                <Contact />
            </div>
            <Outlet />
        </div>
    )
}

export default Main;