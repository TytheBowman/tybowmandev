import React from 'react';
import Main from '../pages/Main';
import NavBar from './NavBar';
import Footer from './Footer';
import '../dist/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from '../pages/404';
import {BrowserRouter as Router, Route, Link, Routes, Navigate} from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
     <Main />
      <Footer />
    </div>
  );
}

export default App;