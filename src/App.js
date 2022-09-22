import React from 'react';
import { IconContext } from 'react-icons';
import './App.css';

import {Navbar, Footer} from './components';
import {About, Projects, Services} from './containers';

function App() {
  return (
    <IconContext.Provider value={{size: '1.3em'}}>
      <div className="App">
        <Navbar />
        <About />
        <Services />
        <Projects />
        <Footer />
      </div>
    </IconContext.Provider>
  )
}

export default App