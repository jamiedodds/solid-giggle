import React from 'react';
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import HomePage from './components/pages/HomePage';

import './Assets/css/default.min.css';

function App() {
  return (
    <div className="App">
      <Header />

        <HomePage />

      <Footer />
    </div>
  );
}

export default App;
