import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Service />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
