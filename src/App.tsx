import React from 'react';
import './App.css';

import {Navbar, Footer, Header} from './components';
import {About, Projects, Technologies} from './pages';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Header />
        <Technologies />
        <Projects />
        <About />
        <Footer />
      </div>
  )
}

export default App
