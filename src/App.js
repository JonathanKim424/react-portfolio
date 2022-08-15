import React from 'react';
import './App.css';
import { Footer, Blog, Header } from './containers';
import { Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Blog />
      <Footer />
    </div>
  )
}

export default App