import React from 'react';
import './App.css';
import { Navbar } from './components';
import { Header, Skills, Projects, Footer } from './containers';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App