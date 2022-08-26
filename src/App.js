import React from 'react';
import './App.css';
import { Navbar } from './components';
import { Header, Skills, Blog, Footer } from './containers';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Skills />
      <Blog />
      <Footer />
    </div>
  )
}

export default App