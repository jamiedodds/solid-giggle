import React from 'react';
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import HomePage from './components/pages/HomePage';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './Assets/css/default.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/Project" component={Project} />
        <Route exact path="/Contact" component={Contact} />

      <Footer />
    </div>
    </Router>
  );
}

export default App;
