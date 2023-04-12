import React from 'react';
//import {Route, Switch} from 'react-router'
import Main from '../pages/Main';
import NavBar from './NavBar';
import Footer from './Footer';
import '../dist/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from '../pages/404';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Route path="/" exact component={Main} />
        <Route component={NotFound} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;