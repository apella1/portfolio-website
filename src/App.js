import React from 'react';
import { IconContext } from 'react-icons';
import './App.css';

import {Navbar, Footer, Contact} from './components';
import {About, Projects, Technologies} from './pages';

function App() {
  return (
    <IconContext.Provider value={{size: '1.3em'}}>
      <div className="App">
        <Navbar />
        <About />
        <Technologies />
        <Projects />
        {/* <Contact /> */}
        <Footer />
      </div>
    </IconContext.Provider>
  )
}

export default App
